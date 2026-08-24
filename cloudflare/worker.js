const JSON_HEADERS = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store'
};
const ALLOWED_TYPES = ['in-person', 'online-video', 'online-chat', 'phone'];
const ALLOWED_STATUSES = ['pending', 'confirmed', 'completed', 'cancelled'];

const json = (body, status = 200, headers = {}) => new Response(JSON.stringify(body), {
  status,
  headers: { ...JSON_HEADERS, ...headers }
});

const error = (message, status = 400) => json({ success: false, message }, status);
const ok = (data, message) => json({ success: true, ...(message ? { message } : {}), data });

const text = value => typeof value === 'string' ? value.trim() : '';
const integer = value => Number.isInteger(Number(value)) ? Number(value) : null;
const pageArgs = request => {
  const url = new URL(request.url);
  const page = Math.max(1, Math.min(10000, integer(url.searchParams.get('page')) || 1));
  const limit = Math.max(1, Math.min(100, integer(url.searchParams.get('limit')) || 20));
  return { url, page, limit, offset: (page - 1) * limit };
};

function base64Url(value) {
  const bytes = value instanceof ArrayBuffer ? new Uint8Array(value) : new TextEncoder().encode(value);
  let binary = '';
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromBase64Url(value) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = normalized + '='.repeat((4 - normalized.length % 4) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, char => char.charCodeAt(0));
}

async function hmac(secret, value) {
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']
  );
  return crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
}

async function createToken(user, secret) {
  const header = base64Url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = base64Url(JSON.stringify({ id: user.id, role: user.role, exp: Math.floor(Date.now() / 1000) + 7 * 86400 }));
  const input = `${header}.${payload}`;
  return `${input}.${base64Url(await hmac(secret, input))}`;
}

async function verifyToken(request, secret) {
  const authorization = request.headers.get('authorization') || '';
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : '';
  const [header, payload, signature] = token.split('.');
  if (!header || !payload || !signature) return null;
  try {
    const input = `${header}.${payload}`;
    const key = await crypto.subtle.importKey(
      'raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
    );
    const valid = await crypto.subtle.verify('HMAC', key, fromBase64Url(signature), new TextEncoder().encode(input));
    if (!valid) return null;
    const data = JSON.parse(new TextDecoder().decode(fromBase64Url(payload)));
    if (!data.exp || data.exp < Math.floor(Date.now() / 1000)) return null;
    return data;
  } catch (_) {
    return null;
  }
}

async function passwordHash(password, saltBytes = crypto.getRandomValues(new Uint8Array(16))) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: saltBytes, iterations: 120000, hash: 'SHA-256' }, key, 256);
  return `pbkdf2$${base64Url(saltBytes)}$${base64Url(bits)}`;
}

async function passwordMatches(password, stored) {
  const [, salt, expected] = String(stored || '').split('$');
  if (!salt || !expected) return false;
  const actual = await passwordHash(password, fromBase64Url(salt));
  return actual === `pbkdf2$${salt}$${expected}`;
}

async function body(request) {
  try { return await request.json(); } catch (_) { return null; }
}

async function currentUser(request, env) {
  const secret = env.JWT_SECRET;
  if (!secret || secret.length < 32) return null;
  const token = await verifyToken(request, secret);
  if (!token) return null;
  return env.DB.prepare(
    'SELECT id, username, email, full_name, phone, role, avatar, is_active FROM users WHERE id = ? AND is_active = 1'
  ).bind(token.id).first();
}

function doctorProjection() {
  return `
    SELECT d.*, s.name_fa AS specialty_name, s.name_en AS specialty_name_en,
      s.slug AS specialty_slug, u.full_name, u.email, u.phone, u.avatar,
      CASE WHEN d.image_local IS NOT NULL AND d.image_local != ''
        THEN '/assets/doctors/' || d.image_local ELSE NULL END AS image_url
    FROM doctors d
    LEFT JOIN specialties s ON d.specialty_id = s.id
    LEFT JOIN users u ON d.user_id = u.id
  `;
}

async function doctors(request, env) {
  const { url, page, limit, offset } = pageArgs(request);
  const conditions = ['1 = 1'];
  const params = [];
  const specialty = text(url.searchParams.get('specialty'));
  const search = text(url.searchParams.get('search'));
  if (specialty) { conditions.push('s.slug = ?'); params.push(specialty); }
  if (search) { conditions.push('(u.full_name LIKE ? OR d.bio LIKE ?)'); params.push(`%${search}%`, `%${search}%`); }
  if (url.searchParams.get('featured') === 'true') conditions.push('d.is_featured = 1');
  if (url.searchParams.get('available') === 'true') conditions.push('d.is_available = 1');
  const where = conditions.join(' AND ');
  const rows = await env.DB.prepare(`${doctorProjection()} WHERE ${where} ORDER BY d.is_featured DESC, d.rating DESC LIMIT ? OFFSET ?`)
    .bind(...params, limit, offset).all();
  const count = await env.DB.prepare(`SELECT COUNT(*) AS total FROM doctors d LEFT JOIN specialties s ON d.specialty_id = s.id LEFT JOIN users u ON d.user_id = u.id WHERE ${where}`)
    .bind(...params).first();
  for (const doctor of rows.results) {
    if (!doctor.full_name && doctor.bio) doctor.full_name = doctor.bio.split(' — ')[0].trim();
    if (!doctor.full_name) doctor.full_name = 'پزشک متخصص';
  }
  return json({ success: true, data: rows.results, pagination: { page, limit, total: count?.total || 0, pages: Math.ceil((count?.total || 0) / limit) } });
}

async function doctor(request, env, id) {
  const found = await env.DB.prepare(`${doctorProjection()} WHERE d.id = ?`).bind(id).first();
  if (!found) return error('پزشک مورد نظر یافت نشد', 404);
  if (!found.full_name && found.bio) found.full_name = found.bio.split(' — ')[0].trim();
  found.reviews = (await env.DB.prepare(`
    SELECT r.*, u.full_name AS patient_name, u.avatar AS patient_avatar
    FROM reviews r LEFT JOIN users u ON r.patient_id = u.id
    WHERE r.doctor_id = ? AND r.is_approved = 1 ORDER BY r.created_at DESC LIMIT 10
  `).bind(id).all()).results;
  try { found.working_hours = found.working_hours ? JSON.parse(found.working_hours) : {}; } catch (_) { found.working_hours = {}; }
  try { found.insurance_types = found.insurance_types ? JSON.parse(found.insurance_types) : []; } catch (_) { found.insurance_types = []; }
  return ok(found);
}

async function specialties(env) {
  const result = await env.DB.prepare(`
    SELECT s.*, COUNT(CASE WHEN d.is_available = 1 THEN d.id END) AS doctor_count
    FROM specialties s LEFT JOIN doctors d ON d.specialty_id = s.id
    WHERE s.is_active = 1 GROUP BY s.id ORDER BY s.display_order ASC, s.name_fa ASC
  `).all();
  return ok(result.results);
}

async function departments(env) {
  const result = await env.DB.prepare(`
    SELECT d.*, doc.id AS head_doctor_id, u.full_name AS head_doctor_name
    FROM departments d LEFT JOIN doctors doc ON d.head_doctor_id = doc.id
    LEFT JOIN users u ON doc.user_id = u.id
    WHERE d.is_active = 1 ORDER BY d.display_order ASC
  `).all();
  return ok(result.results);
}

async function slots(request, env, doctorId) {
  const url = new URL(request.url);
  const date = url.searchParams.get('date') || '';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return error('لطفاً تاریخ معتبر را مشخص کنید');
  const doctor = await env.DB.prepare('SELECT working_hours, consultation_fee FROM doctors WHERE id = ? AND is_available = 1').bind(doctorId).first();
  if (!doctor) return error('پزشک مورد نظر یافت نشد یا قابل رزرو نیست', 404);
  let hours = {};
  try { hours = doctor.working_hours ? JSON.parse(doctor.working_hours) : {}; } catch (_) {}
  const day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][new Date(`${date}T00:00:00Z`).getUTCDay()];
  const schedule = hours[day];
  if (!schedule || !schedule.enabled) return ok({ date, day, available_slots: [], consultation_fee: doctor.consultation_fee });
  const validTime = value => /^([01]\d|2[0-3]):[0-5]\d$/.test(value || '');
  const duration = Number(schedule.duration || 30);
  if (!validTime(schedule.start) || !validTime(schedule.end) || duration < 5 || duration > 240 || schedule.start >= schedule.end) {
    return ok({ date, day, available_slots: [], consultation_fee: doctor.consultation_fee });
  }
  const booked = await env.DB.prepare(`SELECT appointment_time FROM appointments WHERE doctor_id = ? AND appointment_date = ? AND status <> 'cancelled'`).bind(doctorId, date).all();
  const busy = new Set(booked.results.map(row => row.appointment_time));
  const available = [];
  let minutes = Number(schedule.start.slice(0, 2)) * 60 + Number(schedule.start.slice(3));
  const end = Number(schedule.end.slice(0, 2)) * 60 + Number(schedule.end.slice(3));
  while (minutes < end) {
    const value = `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
    if (!busy.has(value)) available.push(value);
    minutes += duration;
  }
  return ok({ date, day, available_slots: available, consultation_fee: doctor.consultation_fee });
}

async function register(request, env) {
  const input = await body(request) || {};
  const username = text(input.username);
  const password = typeof input.password === 'string' ? input.password : '';
  const fullName = text(input.full_name);
  const phone = text(input.phone);
  const email = input.email ? text(input.email) : null;
  if (!/^[a-zA-Z0-9_.-]{3,40}$/.test(username) || password.length < 8 || password.length > 128 || fullName.length < 2 || fullName.length > 120 || !/^[+\d][\d\s-]{7,19}$/.test(phone) || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return error('اطلاعات ثبت‌نام نامعتبر است');
  }
  const exists = await env.DB.prepare('SELECT id FROM users WHERE username = ? OR phone = ?').bind(username, phone).first();
  if (exists) return error('کاربری با این نام کاربری یا شماره تلفن قبلاً ثبت شده است');
  const hash = await passwordHash(password);
  const result = await env.DB.prepare('INSERT INTO users (username, email, password_hash, full_name, phone, role) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(username, email, hash, fullName, phone, 'patient').run();
  const user = { id: result.meta.last_row_id, username, email, full_name: fullName, phone, role: 'patient' };
  return json({ success: true, message: 'ثبت‌نام با موفقیت انجام شد', data: { token: await createToken(user, env.JWT_SECRET), user } }, 201);
}

async function login(request, env) {
  const input = await body(request) || {};
  const username = text(input.username);
  const password = typeof input.password === 'string' ? input.password : '';
  if (!username || password.length < 1 || password.length > 128) return error('نام کاربری یا رمز عبور نامعتبر است');
  const user = await env.DB.prepare('SELECT * FROM users WHERE (username = ? OR phone = ?) AND is_active = 1').bind(username, username).first();
  if (!user || !(await passwordMatches(password, user.password_hash))) return error('نام کاربری یا رمز عبور اشتباه است', 401);
  await env.DB.prepare('UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = ?').bind(user.id).run();
  delete user.password_hash;
  return ok({ token: await createToken(user, env.JWT_SECRET), user });
}

async function createAppointment(request, env, user) {
  const input = await body(request) || {};
  const doctorId = integer(input.doctor_id);
  const date = text(input.appointment_date);
  const time = text(input.appointment_time);
  const type = text(input.type);
  const patientName = text(input.patient_name);
  const patientPhone = text(input.patient_phone);
  const age = input.patient_age === '' || input.patient_age == null ? null : integer(input.patient_age);
  if (!doctorId || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time) || !ALLOWED_TYPES.includes(type) || patientName.length < 2 || patientName.length > 120 || !/^[+\d][\d\s-]{7,19}$/.test(patientPhone) || (age !== null && (age < 0 || age > 120))) return error('اطلاعات نوبت نامعتبر است');
  const doctor = await env.DB.prepare('SELECT id FROM doctors WHERE id = ? AND is_available = 1').bind(doctorId).first();
  if (!doctor) return error('پزشک مورد نظر یافت نشد یا قابل رزرو نیست', 404);
  try {
    const result = await env.DB.prepare(`INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, type, patient_name, patient_phone, patient_age, reason, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
      .bind(user?.id || null, doctorId, date, time, type, patientName, patientPhone, age, text(input.reason).slice(0, 500) || null, text(input.notes).slice(0, 2000) || null).run();
    return json({ success: true, message: 'نوبت با موفقیت ثبت شد', data: await env.DB.prepare('SELECT * FROM appointments WHERE id = ?').bind(result.meta.last_row_id).first() }, 201);
  } catch (err) {
    if (String(err.message).includes('appointments_slot_unique_active')) return error('این زمان هم‌زمان توسط کاربر دیگری رزرو شد', 409);
    throw err;
  }
}

async function appointments(request, env, user) {
  const { url, page, limit, offset } = pageArgs(request);
  const conditions = ['1 = 1'];
  const params = [];
  if (user.role === 'patient') { conditions.push('a.patient_id = ?'); params.push(user.id); }
  if (user.role === 'doctor') {
    conditions.push('a.doctor_id = (SELECT id FROM doctors WHERE user_id = ?)'); params.push(user.id);
  }
  if (url.searchParams.get('status')) { conditions.push('a.status = ?'); params.push(url.searchParams.get('status')); }
  const where = conditions.join(' AND ');
  const result = await env.DB.prepare(`SELECT a.*, d.id AS doctor_id, u1.full_name AS doctor_name, s.name_fa AS specialty_name, u2.full_name AS patient_full_name FROM appointments a LEFT JOIN doctors d ON a.doctor_id = d.id LEFT JOIN users u1 ON d.user_id = u1.id LEFT JOIN specialties s ON d.specialty_id = s.id LEFT JOIN users u2 ON a.patient_id = u2.id WHERE ${where} ORDER BY a.appointment_date DESC, a.appointment_time DESC LIMIT ? OFFSET ?`).bind(...params, limit, offset).all();
  const count = await env.DB.prepare(`SELECT COUNT(*) AS total FROM appointments a WHERE ${where}`).bind(...params).first();
  return json({ success: true, data: result.results, pagination: { page, limit, total: count?.total || 0, pages: Math.ceil((count?.total || 0) / limit) } });
}

async function appointmentDetail(request, env, user, id) {
  const appointment = await env.DB.prepare(`
    SELECT a.*, d.id AS doctor_id, u1.full_name AS doctor_name, u1.phone AS doctor_phone,
      d.office_address, s.name_fa AS specialty_name, u2.full_name AS patient_full_name,
      u2.email AS patient_email
    FROM appointments a
    LEFT JOIN doctors d ON a.doctor_id = d.id
    LEFT JOIN users u1 ON d.user_id = u1.id
    LEFT JOIN specialties s ON d.specialty_id = s.id
    LEFT JOIN users u2 ON a.patient_id = u2.id
    WHERE a.id = ?
  `).bind(id).first();
  if (!appointment) return error('نوبت مورد نظر یافت نشد', 404);
  if (user.role === 'patient' && appointment.patient_id !== user.id) return error('شما دسترسی به این نوبت را ندارید', 403);
  if (user.role === 'doctor') {
    const owned = await env.DB.prepare('SELECT id FROM doctors WHERE id = ? AND user_id = ?').bind(appointment.doctor_id, user.id).first();
    if (!owned) return error('شما دسترسی به این نوبت را ندارید', 403);
  }
  return ok(appointment);
}

async function updateProfile(request, env, user) {
  const input = await body(request) || {};
  const name = input.full_name === undefined ? undefined : text(input.full_name);
  const phone = input.phone === undefined ? undefined : text(input.phone);
  const email = input.email === undefined ? undefined : text(input.email);
  if (name !== undefined && (name.length < 2 || name.length > 120)) return error('نام نامعتبر است');
  if (phone !== undefined && !/^[+\d][\d\s-]{7,19}$/.test(phone)) return error('شماره تلفن نامعتبر است');
  if (email !== undefined && email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return error('ایمیل نامعتبر است');
  const updates = [];
  const values = [];
  if (name !== undefined) { updates.push('full_name = ?'); values.push(name); }
  if (phone !== undefined) { updates.push('phone = ?'); values.push(phone); }
  if (email !== undefined) { updates.push('email = ?'); values.push(email || null); }
  if (input.avatar !== undefined && typeof input.avatar === 'string') { updates.push('avatar = ?'); values.push(input.avatar.slice(0, 500)); }
  if (!updates.length) return error('هیچ فیلدی برای به‌روزرسانی ارسال نشده است');
  values.push(user.id);
  try { await env.DB.prepare(`UPDATE users SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`).bind(...values).run(); }
  catch (err) { if (String(err.message).includes('UNIQUE')) return error('این شماره یا ایمیل قبلاً ثبت شده است'); throw err; }
  return ok(await env.DB.prepare('SELECT id, username, email, full_name, phone, role, avatar, created_at FROM users WHERE id = ?').bind(user.id).first(), 'پروفایل به‌روزرسانی شد');
}

async function changePassword(request, env, user) {
  const input = await body(request) || {};
  const current = typeof input.current_password === 'string' ? input.current_password : '';
  const next = typeof input.new_password === 'string' ? input.new_password : '';
  const stored = await env.DB.prepare('SELECT password_hash FROM users WHERE id = ?').bind(user.id).first();
  if (!stored || !(await passwordMatches(current, stored.password_hash))) return error('رمز عبور فعلی اشتباه است', 401);
  if (next.length < 8 || next.length > 128) return error('رمز عبور جدید باید بین ۸ تا ۱۲۸ کاراکتر باشد');
  await env.DB.prepare('UPDATE users SET password_hash = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').bind(await passwordHash(next), user.id).run();
  return json({ success: true, message: 'رمز عبور با موفقیت تغییر کرد' });
}

async function publicReviews(request, env) {
  const url = new URL(request.url);
  const doctorId = integer(url.searchParams.get('doctor_id'));
  const conditions = ['r.is_approved = 1'];
  const params = [];
  if (doctorId) { conditions.push('r.doctor_id = ?'); params.push(doctorId); }
  const rows = await env.DB.prepare(`SELECT r.*, u.full_name AS patient_name, u.avatar AS patient_avatar FROM reviews r LEFT JOIN users u ON r.patient_id = u.id WHERE ${conditions.join(' AND ')} ORDER BY r.created_at DESC LIMIT 100`).bind(...params).all();
  return ok(rows.results);
}

async function createReview(request, env, user) {
  const input = await body(request) || {};
  const doctorId = integer(input.doctor_id);
  const rating = integer(input.rating);
  const comment = text(input.comment).slice(0, 2000);
  if (!doctorId || !rating || rating < 1 || rating > 5) return error('پزشک و امتیاز معتبر الزامی است');
  const doctor = await env.DB.prepare('SELECT id FROM doctors WHERE id = ?').bind(doctorId).first();
  if (!doctor) return error('پزشک مورد نظر یافت نشد', 404);
  const result = await env.DB.prepare('INSERT INTO reviews (doctor_id, patient_id, appointment_id, rating, comment) VALUES (?, ?, ?, ?, ?)').bind(doctorId, user.id, integer(input.appointment_id), rating, comment || null).run();
  return json({ success: true, message: 'نظر شما پس از تایید نمایش داده می‌شود', data: await env.DB.prepare('SELECT * FROM reviews WHERE id = ?').bind(result.meta.last_row_id).first() }, 201);
}

async function schedule(env, id) {
  const row = await env.DB.prepare('SELECT working_hours FROM doctors WHERE id = ?').bind(id).first();
  if (!row) return error('پزشک مورد نظر یافت نشد', 404);
  try { return ok(row.working_hours ? JSON.parse(row.working_hours) : {}); } catch (_) { return ok({}); }
}

async function appointmentStats(request, env) {
  const url = new URL(request.url);
  const period = ['7days', '30days', '90days'].includes(url.searchParams.get('period')) ? url.searchParams.get('period') : '7days';
  const days = Number(period.replace('days', ''));
  const rows = await env.DB.prepare(`SELECT appointment_date, COUNT(*) AS count, SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) AS completed, SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) AS cancelled FROM appointments WHERE appointment_date >= date('now', ?) GROUP BY appointment_date ORDER BY appointment_date ASC`).bind(`-${days} days`).all();
  return ok(rows.results);
}

async function updateAppointment(request, env, user, id) {
  const appointment = await env.DB.prepare('SELECT * FROM appointments WHERE id = ?').bind(id).first();
  if (!appointment) return error('نوبت مورد نظر یافت نشد', 404);
  if (user.role === 'patient' && appointment.patient_id !== user.id) return error('شما دسترسی به این نوبت را ندارید', 403);
  if (user.role === 'doctor') {
    const owned = await env.DB.prepare('SELECT id FROM doctors WHERE id = ? AND user_id = ?').bind(appointment.doctor_id, user.id).first();
    if (!owned) return error('شما دسترسی به این نوبت را ندارید', 403);
  }
  const input = await body(request) || {};
  const updates = [];
  const values = [];
  if (input.appointment_date && /^\d{4}-\d{2}-\d{2}$/.test(input.appointment_date)) { updates.push('appointment_date = ?'); values.push(input.appointment_date); }
  if (input.appointment_time && /^([01]\d|2[0-3]):[0-5]\d$/.test(input.appointment_time)) { updates.push('appointment_time = ?'); values.push(input.appointment_time); }
  if (input.type && ALLOWED_TYPES.includes(input.type)) { updates.push('type = ?'); values.push(input.type); }
  if (typeof input.reason === 'string') { updates.push('reason = ?'); values.push(input.reason.slice(0, 500)); }
  if (typeof input.notes === 'string') { updates.push('notes = ?'); values.push(input.notes.slice(0, 2000)); }
  if ((user.role === 'admin' || user.role === 'doctor') && ALLOWED_STATUSES.includes(input.status)) { updates.push('status = ?'); values.push(input.status); }
  if (!updates.length) return error('هیچ فیلد معتبری برای به‌روزرسانی ارسال نشده است');
  updates.push('updated_at = CURRENT_TIMESTAMP');
  values.push(id);
  try { await env.DB.prepare(`UPDATE appointments SET ${updates.join(', ')} WHERE id = ?`).bind(...values).run(); }
  catch (err) { if (String(err.message).includes('appointments_slot_unique_active')) return error('این زمان هم‌زمان توسط کاربر دیگری رزرو شده است', 409); throw err; }
  return ok(await env.DB.prepare('SELECT * FROM appointments WHERE id = ?').bind(id).first(), 'نوبت با موفقیت به‌روزرسانی شد');
}

async function requireUser(request, env, roles = []) {
  const user = await currentUser(request, env);
  if (!user) return { response: error('دسترسی غیرمجاز', 401), user: null };
  if (roles.length && !roles.includes(user.role)) return { response: error('شما دسترسی به این بخش را ندارید', 403), user: null };
  return { response: null, user };
}

async function adminDoctors(request, env, user, id = null) {
  if (request.method === 'GET') return doctors(request, env);
  const input = await body(request) || {};
  if (request.method === 'POST') {
    const medicalCode = text(input.medical_code);
    const specialtyId = integer(input.specialty_id);
    if (!medicalCode || !specialtyId) return error('کد نظام پزشکی و تخصص الزامی است');
    try {
      const result = await env.DB.prepare(`INSERT INTO doctors (user_id, medical_code, specialty_id, bio, education, experience_years, consultation_fee, office_address, office_phone, office_lat, office_lng, working_hours, accepts_insurance, insurance_types, is_featured, image, image_local) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
        .bind(input.user_id || null, medicalCode, specialtyId, text(input.bio) || null, text(input.education) || null, integer(input.experience_years) || 0, Number(input.consultation_fee) || 0, text(input.office_address) || null, text(input.office_phone) || null, input.office_lat || null, input.office_lng || null, input.working_hours ? JSON.stringify(input.working_hours) : null, input.accepts_insurance ? 1 : 0, input.insurance_types ? JSON.stringify(input.insurance_types) : null, input.is_featured ? 1 : 0, null, text(input.image_local) || null).run();
      return json({ success: true, message: 'پزشک با موفقیت ثبت شد', data: await env.DB.prepare('SELECT * FROM doctors WHERE id = ?').bind(result.meta.last_row_id).first() }, 201);
    } catch (err) {
      if (String(err.message).includes('UNIQUE')) return error('این کد نظام پزشکی قبلاً ثبت شده است');
      throw err;
    }
  }
  if (!id) return error('شناسه پزشک نامعتبر است');
  if (request.method === 'DELETE') {
    const result = await env.DB.prepare('DELETE FROM doctors WHERE id = ?').bind(id).run();
    return result.meta.changes ? json({ success: true, message: 'پزشک با موفقیت حذف شد' }) : error('پزشک مورد نظر یافت نشد', 404);
  }
  if (request.method === 'PUT') {
    const allowed = ['bio', 'education', 'office_address', 'office_phone', 'working_hours', 'experience_years', 'consultation_fee', 'accepts_insurance', 'insurance_types', 'is_available', 'is_featured', 'image_local'];
    const updates = [];
    const values = [];
    for (const key of allowed) {
      if (input[key] === undefined) continue;
      updates.push(`${key} = ?`);
      values.push(['working_hours', 'insurance_types'].includes(key) ? JSON.stringify(input[key]) : input[key]);
    }
    if (!updates.length) return error('هیچ فیلدی برای به‌روزرسانی ارسال نشده است');
    values.push(id);
    await env.DB.prepare(`UPDATE doctors SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`).bind(...values).run();
    return ok(await env.DB.prepare('SELECT * FROM doctors WHERE id = ?').bind(id).first(), 'اطلاعات پزشک به‌روزرسانی شد');
  }
  return error('آدرس مورد نظر یافت نشد', 404);
}

async function adminCrud(request, env, resource, id = null) {
  const input = await body(request) || {};
  const tables = {
    specialties: { table: 'specialties', fields: ['name_fa', 'name_en', 'slug', 'icon', 'description', 'image', 'display_order', 'is_active'] },
    departments: { table: 'departments', fields: ['name_fa', 'name_en', 'slug', 'description', 'icon', 'image', 'floor', 'phone', 'head_doctor_id', 'display_order', 'is_active'] }
  };
  const config = tables[resource];
  if (!config) return error('منبع نامعتبر است', 404);
  if (request.method === 'POST') {
    const fields = config.fields.filter(field => input[field] !== undefined);
    if (!fields.includes('name_fa') || !fields.includes('slug')) return error('نام و نامک الزامی است');
    const values = fields.map(field => input[field]);
    const marks = fields.map(() => '?').join(', ');
    try {
      const result = await env.DB.prepare(`INSERT INTO ${config.table} (${fields.join(', ')}) VALUES (${marks})`).bind(...values).run();
      return json({ success: true, data: await env.DB.prepare(`SELECT * FROM ${config.table} WHERE id = ?`).bind(result.meta.last_row_id).first() }, 201);
    } catch (err) { if (String(err.message).includes('UNIQUE')) return error('این نامک قبلاً ثبت شده است'); throw err; }
  }
  if (!id) return error('شناسه نامعتبر است');
  if (request.method === 'DELETE') {
    const result = await env.DB.prepare(`DELETE FROM ${config.table} WHERE id = ?`).bind(id).run();
    return result.meta.changes ? json({ success: true, message: 'حذف شد' }) : error('رکورد یافت نشد', 404);
  }
  if (request.method === 'PUT') {
    const fields = config.fields.filter(field => input[field] !== undefined);
    if (!fields.length) return error('هیچ فیلدی برای به‌روزرسانی ارسال نشده است');
    await env.DB.prepare(`UPDATE ${config.table} SET ${fields.map(field => `${field} = ?`).join(', ')} WHERE id = ?`).bind(...fields.map(field => input[field]), id).run();
    return ok(await env.DB.prepare(`SELECT * FROM ${config.table} WHERE id = ?`).bind(id).first(), 'به‌روزرسانی شد');
  }
  return error('آدرس مورد نظر یافت نشد', 404);
}

async function adminReviews(request, env, user, id = null) {
  if (request.method === 'GET') return json({ success: true, data: (await env.DB.prepare(`SELECT r.*, u.full_name AS patient_name FROM reviews r LEFT JOIN users u ON r.patient_id = u.id ORDER BY r.created_at DESC`).all()).results });
  if (!id) return error('شناسه نظر نامعتبر است');
  if (request.method === 'PUT') { await env.DB.prepare('UPDATE reviews SET is_approved = 1 WHERE id = ?').bind(id).run(); return json({ success: true, message: 'نظر تایید شد' }); }
  if (request.method === 'DELETE') { await env.DB.prepare('DELETE FROM reviews WHERE id = ?').bind(id).run(); return json({ success: true, message: 'نظر حذف شد' }); }
  return error('آدرس مورد نظر یافت نشد', 404);
}

async function adminStats(env) {
  const count = async sql => (await env.DB.prepare(sql).first())?.count || 0;
  return ok({
    doctors: { total: await count('SELECT COUNT(*) AS count FROM doctors'), available: await count('SELECT COUNT(*) AS count FROM doctors WHERE is_available = 1') },
    appointments: { total: await count('SELECT COUNT(*) AS count FROM appointments'), pending: await count("SELECT COUNT(*) AS count FROM appointments WHERE status = 'pending'") },
    specialties: { total: await count('SELECT COUNT(*) AS count FROM specialties WHERE is_active = 1') },
    departments: { total: await count('SELECT COUNT(*) AS count FROM departments WHERE is_active = 1') }
  });
}

async function routeApi(request, env) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/api\/?/, '').replace(/\/$/, '');
  if (path === 'health') return json({ success: true, message: 'Omid Hospital Cloudflare API is running', timestamp: new Date().toISOString() });
  if (!env.DB || !env.JWT_SECRET) return error('Cloudflare bindings are not configured', 503);
  if (request.method === 'POST' && path === 'auth/register') return register(request, env);
  if (request.method === 'POST' && path === 'auth/login') return login(request, env);
  if (request.method === 'GET' && path === 'specialties') return specialties(env);
  if (request.method === 'GET' && path === 'departments') return departments(env);
  if (request.method === 'GET' && path === 'doctors') return doctors(request, env);
  const doctorMatch = path.match(/^doctors\/(\d+)$/);
  if (request.method === 'GET' && doctorMatch) return doctor(request, env, doctorMatch[1]);
  const slotMatch = path.match(/^appointments\/doctor\/(\d+)\/available-slots$/);
  if (request.method === 'GET' && slotMatch) return slots(request, env, slotMatch[1]);
  const user = await currentUser(request, env);
  if (path === 'auth/me' && request.method === 'GET') return user ? ok(user) : error('دسترسی غیرمجاز', 401);
  if (path === 'auth/profile' && request.method === 'PUT') return user ? updateProfile(request, env, user) : error('دسترسی غیرمجاز', 401);
  if (path === 'auth/password' && request.method === 'PUT') return user ? changePassword(request, env, user) : error('دسترسی غیرمجاز', 401);
  if (path === 'reviews' && request.method === 'GET') {
    if (user?.role === 'admin' && url.searchParams.get('approved_only') === 'false') {
      return adminReviews(request, env, user);
    }
    return publicReviews(request, env);
  }
  if (path === 'reviews' && request.method === 'POST') return user ? createReview(request, env, user) : error('دسترسی غیرمجاز', 401);
  const scheduleMatch = path.match(/^doctors\/(\d+)\/schedule$/);
  if (scheduleMatch && request.method === 'GET') return schedule(env, scheduleMatch[1]);
  if (path === 'stats/appointments' && request.method === 'GET') {
    const auth = await requireUser(request, env, ['admin']);
    if (auth.response) return auth.response;
    return appointmentStats(request, env);
  }
  const adminDoctorsMatch = path.match(/^doctors(?:\/(\d+))?$/);
  if (adminDoctorsMatch && ['POST', 'PUT', 'DELETE'].includes(request.method)) {
    const auth = await requireUser(request, env, ['admin']);
    if (auth.response) return auth.response;
    return adminDoctors(request, env, auth.user, adminDoctorsMatch[1]);
  }
  const adminResourceMatch = path.match(/^(specialties|departments)(?:\/(\d+))?$/);
  if (adminResourceMatch && ['POST', 'PUT', 'DELETE'].includes(request.method)) {
    const auth = await requireUser(request, env, ['admin']);
    if (auth.response) return auth.response;
    return adminCrud(request, env, adminResourceMatch[1], adminResourceMatch[2]);
  }
  const adminReviewMatch = path.match(/^reviews(?:\/(\d+)(?:\/approve)?)?$/);
  if (adminReviewMatch && (request.method === 'GET' || request.method === 'DELETE' || request.method === 'PUT')) {
    const auth = await requireUser(request, env, ['admin']);
    if (auth.response) return auth.response;
    return adminReviews(request, env, auth.user, adminReviewMatch[1]);
  }
  if (path === 'stats/dashboard' && request.method === 'GET') {
    const auth = await requireUser(request, env, ['admin']);
    if (auth.response) return auth.response;
    return adminStats(env);
  }
  if (path === 'appointments' && request.method === 'POST') return createAppointment(request, env, user);
  if (path === 'appointments' && request.method === 'GET') return user ? appointments(request, env, user) : error('دسترسی غیرمجاز', 401);
  const appointmentMatch = path.match(/^appointments\/(\d+)$/);
  if (appointmentMatch && request.method === 'GET') return user ? appointmentDetail(request, env, user, appointmentMatch[1]) : error('دسترسی غیرمجاز', 401);
  if (appointmentMatch && request.method === 'PUT') return user ? updateAppointment(request, env, user, appointmentMatch[1]) : error('دسترسی غیرمجاز', 401);
  if (appointmentMatch && request.method === 'DELETE') {
    if (!user) return error('دسترسی غیرمجاز', 401);
    const replacement = new Request(request.url, { method: 'PUT', headers: request.headers, body: JSON.stringify({ status: 'cancelled' }) });
    return updateAppointment(replacement, env, user, appointmentMatch[1]);
  }
  return error('آدرس مورد نظر یافت نشد', 404);
}

export default {
  async fetch(request, env) {
    try {
      if (new URL(request.url).pathname.startsWith('/api/')) return routeApi(request, env);
      return env.ASSETS.fetch(request);
    } catch (err) {
      console.error('Worker error:', err);
      return error('خطای داخلی سرور', 500);
    }
  }
};
