// API Configuration
const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api'
  : '/api';

// State Management
const state = {
  user: null,
  token: localStorage.getItem('token'),
  currentPage: 'dashboard'
};

// Utility Functions
const escapeHtml = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/\"/g, '&quot;')
  .replace(/'/g, '&#039;');

const showLoading = () => {
  document.getElementById('loading-overlay').style.display = 'flex';
};

const hideLoading = () => {
  document.getElementById('loading-overlay').style.display = 'none';
};

const showToast = (message, type = 'success') => {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast${type === 'error' ? ' error' : ''}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
};

// API Functions
const api = {
  async request(endpoint, options = {}) {
    showLoading();
    try {
      const headers = {
        'Content-Type': 'application/json',
        ...options.headers
      };

      if (state.token) {
        headers['Authorization'] = `Bearer ${state.token}`;
      }

      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'خطا در ارتباط با سرور');
      }

      return data;
    } catch (error) {
      showToast(error.message, 'error');
      throw error;
    } finally {
      hideLoading();
    }
  },

  // Auth
  login: (username, password) => 
    api.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    }),

  getMe: () => api.request('/auth/me'),

  // Doctors
  getDoctors: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return api.request(`/doctors?${query}`);
  },

  getDoctor: (id) => api.request(`/doctors/${id}`),

  createDoctor: (data) => 
    api.request('/doctors', {
      method: 'POST',
      body: JSON.stringify(data)
    }),

  updateDoctor: (id, data) =>
    api.request(`/doctors/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),

  deleteDoctor: (id) =>
    api.request(`/doctors/${id}`, {
      method: 'DELETE'
    }),

  // Specialties
  getSpecialties: () => api.request('/specialties'),

  createSpecialty: (data) =>
    api.request('/specialties', {
      method: 'POST',
      body: JSON.stringify(data)
    }),

  updateSpecialty: (id, data) =>
    api.request(`/specialties/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),

  deleteSpecialty: (id) =>
    api.request(`/specialties/${id}`, {
      method: 'DELETE'
    }),

  // Appointments
  getAppointments: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return api.request(`/appointments?${query}`);
  },

  updateAppointmentStatus: (id, status) =>
    api.request(`/appointments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status })
    }),

  // Departments
  getDepartments: () => api.request('/departments'),

  createDepartment: (data) =>
    api.request('/departments', {
      method: 'POST',
      body: JSON.stringify(data)
    }),

  updateDepartment: (id, data) =>
    api.request(`/departments/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    }),

  deleteDepartment: (id) =>
    api.request(`/departments/${id}`, {
      method: 'DELETE'
    }),

  // Reviews
  getReviews: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return api.request(`/reviews?${query}`);
  },

  approveReview: (id) =>
    api.request(`/reviews/${id}/approve`, {
      method: 'PUT'
    }),

  deleteReview: (id) =>
    api.request(`/reviews/${id}`, {
      method: 'DELETE'
    }),

  // Staff and scheduling
  getStaff: (role = 'secretary') => api.request(`/users?role=${encodeURIComponent(role)}`),
  createSecretary: (data) => api.request('/users/secretaries', { method: 'POST', body: JSON.stringify(data) }),
  updateStaffStatus: (id, is_active) => api.request(`/users/${id}/status`, { method: 'PUT', body: JSON.stringify({ is_active }) }),
  getSchedule: (id) => api.request(`/doctors/${id}/schedule`),
  updateSchedule: (id, working_hours) => api.request(`/doctors/${id}/schedule`, { method: 'PUT', body: JSON.stringify({ working_hours }) }),
  getScheduleDates: (id) => api.request(`/doctors/${id}/schedule-dates`),
  saveScheduleDate: (id, data) => api.request(`/doctors/${id}/schedule-dates`, { method: 'POST', body: JSON.stringify(data) }),
  deleteScheduleDate: (id, date) => api.request(`/doctors/${id}/schedule-dates/${date}`, { method: 'DELETE' }),

  // Stats
  getDashboardStats: () => api.request('/stats/dashboard'),
  getTourSettings: () => api.request('/tour-settings'),
  saveTourSettings: (scenes) => api.request('/tour-settings', { method: 'PUT', body: JSON.stringify({ scenes }) })
};

// Auth Handler
const handleLogin = async (e) => {
  e.preventDefault();
  
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const errorEl = document.getElementById('login-error');

  try {
    const response = await api.login(username, password);
    
    state.token = response.data.token;
    state.user = response.data.user;
    localStorage.setItem('token', state.token);
    localStorage.setItem('user', JSON.stringify(state.user));
    
    showToast('ورود موفقیت‌آمیز بود', 'success');
    showDashboard();
  } catch (error) {
    errorEl.textContent = error.message;
  }
};

const handleLogout = () => {
  state.token = null;
  state.user = null;
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  location.reload();
};

const showDashboard = async () => {
  // Get user info before revealing the panel; patient tokens must not see admin UI.
  try {
    const response = await api.getMe();
    state.user = response.data;
    if (!['admin', 'secretary'].includes(state.user.role)) {
      throw new Error('این حساب دسترسی به پنل مدیریت ندارد');
    }
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';
    document.getElementById('user-name').textContent = `${state.user.full_name} (${state.user.role === 'secretary' ? 'منشی' : 'مدیر'})`;
    if (state.user.role === 'secretary') {
      document.querySelectorAll('.nav-item').forEach(item => {
        if (['users', 'specialties', 'departments', 'reviews', 'tour', 'settings'].includes(item.dataset.page)) item.style.display = 'none';
      });
    }
  } catch (error) {
    handleLogout();
    return;
  }

  // Secretaries start with the operational schedule view; administrators see dashboard stats.
  loadPage(state.user.role === 'secretary' ? 'schedules' : 'dashboard');
};

// Page Navigation
const loadPage = async (pageName) => {
  if (pageName === 'tour' && state.user?.role !== 'admin') {
    showToast('ویرایش تور فقط برای مدیر سیستم فعال است', 'error');
    return;
  }
  state.currentPage = pageName;
  
  // Update active nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.page === pageName) {
      item.classList.add('active');
    }
  });

  const container = document.getElementById('page-container');
  
  switch(pageName) {
    case 'dashboard':
      await loadDashboardPage(container);
      break;
    case 'doctors':
      await loadDoctorsPage(container);
      break;
    case 'specialties':
      await loadSpecialtiesPage(container);
      break;
    case 'appointments':
      await loadAppointmentsPage(container);
      break;
    case 'schedules':
      await loadSchedulesPage(container);
      break;
    case 'departments':
      await loadDepartmentsPage(container);
      break;
    case 'reviews':
      await loadReviewsPage(container);
      break;
    case 'users':
      await loadUsersPage(container);
      break;
    case 'tour':
      await loadTourPage(container);
      break;
    default:
      container.innerHTML = '<div class="empty-state"><h2>صفحه در دست ساخت</h2></div>';
  }
};

// Dashboard Page
const loadDashboardPage = async (container) => {
  container.innerHTML = `
    <h2 style="margin-bottom:1.5rem;">📊 داشبورد مدیریت</h2>
    <div class="stats-grid">
      <div class="stat-card"><div class="num" id="d-stats-docs">--</div><div class="lbl">پزشکان</div></div>
      <div class="stat-card"><div class="num" id="d-stats-apts">--</div><div class="lbl">نوبت‌ها</div></div>
      <div class="stat-card"><div class="num" id="d-stats-specs">--</div><div class="lbl">تخصص‌ها</div></div>
      <div class="stat-card"><div class="num" id="d-stats-depts">--</div><div class="lbl">بخش‌ها</div></div>
    </div>
    <div class="card"><p style="color:var(--text2);">به پنل مدیریت بیمارستان امید خوش آمدید. از منوی کناری بخش مورد نظر را انتخاب کنید.</p></div>
  `;
  try {
    var s=await api.getDashboardStats(); var d=s.data;
    document.getElementById('d-stats-docs').textContent=d.doctors?.total||0;
    document.getElementById('d-stats-apts').textContent=d.appointments?.total||0;
    document.getElementById('d-stats-specs').textContent=d.specialties?.total||0;
    document.getElementById('d-stats-depts').textContent=d.departments?.total||0;
  } catch(e) {}
};

// Doctors Page
const loadDoctorsPage = async (container) => {
  var resp=await api.getDoctors(); var docs=resp.data;
  container.innerHTML=`
    <h2 style="margin-bottom:1.5rem;">👨‍⚕️ مدیریت پزشکان</h2>
    <div class="flex flex-between mb-2">
      <div class="search-bar"><input type="search" placeholder="جستجوی پزشک..." id="search-doctors"></div>
    </div>
    <div class="table-wrap"><table id="doctors-table"><thead><tr>
      <th>نام</th><th>تخصص</th><th>کد نظام</th><th>هزینه (تومان)</th><th>امتیاز</th><th>وضعیت</th><th>عملیات</th>
    </tr></thead><tbody id="doctors-tbody">${renderDoctorsTable(docs)}</tbody></table></div>
    <div id="doctor-modal"></div>
  `;
  document.getElementById('search-doctors').addEventListener('input',async function(e){
    var r=await api.getDoctors({search:e.target.value});
    document.getElementById('doctors-tbody').innerHTML=renderDoctorsTable(r.data);
  });
};

const renderDoctorsTable = (doctors) => {
  if (doctors.length === 0) {
    return '<tr><td colspan="7" style="text-align:center;">پزشکی یافت نشد</td></tr>';
  }

  return doctors.map(doc => `
    <tr>
      <td>${escapeHtml(doc.full_name)}</td>
      <td>${escapeHtml(doc.specialty_name)}</td>
      <td>${escapeHtml(doc.medical_code)}</td>
      <td>${(doc.consultation_fee || 0).toLocaleString()} تومان</td>
      <td>⭐ ${(doc.rating || 0).toFixed(1)}</td>
      <td><span class="badge badge-${doc.is_available ? 'success' : 'danger'}">${doc.is_available ? 'فعال' : 'غیرفعال'}</span></td>
      <td class="action-buttons">
        <button class="btn btn-sm btn-primary" onclick="editDoctor(${doc.id})">ویرایش</button>
        <button class="btn btn-sm btn-danger" onclick="deleteDoctor(${doc.id})">حذف</button>
      </td>
    </tr>
  `).join('');
};

// Helper Functions
const getStatusBadge = (status) => {
  const badges = {
    pending: 'warning',
    confirmed: 'info',
    completed: 'success',
    cancelled: 'danger'
  };
  return badges[status] || 'info';
};

const getStatusText = (status) => {
  const texts = {
    pending: 'در انتظار',
    confirmed: 'تایید شده',
    completed: 'انجام شده',
    cancelled: 'لغو شده'
  };
  return texts[status] || status;
};

// Modal Functions
window.showDoctorModal = async (doctorId = null) => {
  const specialties = await api.getSpecialties();
  const doctor = doctorId ? await api.getDoctor(doctorId) : null;

  const modal = document.getElementById('doctor-modal');
  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeDoctorModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h2>${doctorId ? 'ویرایش پزشک' : 'افزودن پزشک جدید'}</h2>
          <button class="modal-close" onclick="closeDoctorModal()">×</button>
        </div>
        <form id="doctor-form" class="modal-body">
          <div class="form-group">
            <label>کد نظام پزشکی *</label>
            <input type="text" name="medical_code" value="${escapeHtml(doctor?.medical_code || '')}" required>
          </div>
          <div class="form-group">
            <label>تخصص *</label>
            <select name="specialty_id" required>
              <option value="">انتخاب کنید</option>
              ${specialties.data.map(s => `
                <option value="${escapeHtml(s.id)}" ${doctor?.specialty_id === s.id ? 'selected' : ''}>${escapeHtml(s.name_fa)}</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>بیوگرافی</label>
            <textarea name="bio">${escapeHtml(doctor?.bio || '')}</textarea>
          </div>
          <div class="form-group">
            <label>تحصیلات</label>
            <textarea name="education">${escapeHtml(doctor?.education || '')}</textarea>
          </div>
          <div class="form-group">
            <label>سابقه کار (سال)</label>
            <input type="number" name="experience_years" value="${escapeHtml(doctor?.experience_years || 0)}">
          </div>
          <div class="form-group">
            <label>هزینه ویزیت (تومان)</label>
            <input type="number" name="consultation_fee" value="${escapeHtml(doctor?.consultation_fee || 0)}">
          </div>
          <div class="form-group">
            <label>آدرس مطب</label>
            <textarea name="office_address">${escapeHtml(doctor?.office_address || '')}</textarea>
          </div>
          <div class="form-group">
            <label>تلفن مطب</label>
            <input type="text" name="office_phone" value="${escapeHtml(doctor?.office_phone || '')}">
          </div>
        </form>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="closeDoctorModal()">انصراف</button>
          <button class="btn btn-primary" onclick="saveDoctorForm(${doctorId})">ذخیره</button>
        </div>
      </div>
    </div>
  `;
};

window.closeDoctorModal = (event) => {
  if (!event || event.target.classList.contains('modal-overlay')) {
    document.getElementById('doctor-modal').innerHTML = '';
  }
};

window.saveDoctorForm = async (doctorId) => {
  const form = document.getElementById('doctor-form');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    if (doctorId) {
      await api.updateDoctor(doctorId, data);
      showToast('پزشک با موفقیت به‌روزرسانی شد', 'success');
    } else {
      await api.createDoctor(data);
      showToast('پزشک با موفقیت اضافه شد', 'success');
    }
    closeDoctorModal();
    loadPage('doctors');
  } catch (error) {
    // Error already shown by api.request
  }
};

window.editDoctor = (id) => {
  showDoctorModal(id);
};

window.deleteDoctor = async (id) => {
  if (!confirm('آیا از حذف این پزشک اطمینان دارید؟')) return;

  try {
    await api.deleteDoctor(id);
    showToast('پزشک با موفقیت حذف شد', 'success');
    loadPage('doctors');
  } catch (error) {
    // Error already shown
  }
};

// Specialties Page
const loadSpecialtiesPage = async (container) => {
  const response = await api.getSpecialties();
  const specialties = response.data;

  container.innerHTML = `
    <div class="page-header">
      <h1>مدیریت تخصص‌ها</h1>
    </div>

    <div class="table-container">
      <div class="table-header">
        <h2>لیست تخصص‌ها</h2>
        <button class="btn btn-primary btn-sm" onclick="showSpecialtyModal()">+ افزودن تخصص</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>نام فارسی</th>
            <th>نام انگلیسی</th>
            <th>تعداد پزشکان</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          ${specialties.map(spec => `
            <tr>
              <td>${escapeHtml(spec.name_fa)}</td>
              <td>${escapeHtml(spec.name_en)}</td>
              <td>${escapeHtml(spec.doctor_count)}</td>
              <td><span class="badge badge-${spec.is_active ? 'success' : 'danger'}">${spec.is_active ? 'فعال' : 'غیرفعال'}</span></td>
              <td class="action-buttons">
                <button class="btn btn-sm btn-primary" onclick="editSpecialty(${spec.id})">ویرایش</button>
                <button class="btn btn-sm btn-danger" onclick="deleteSpecialty(${spec.id})">حذف</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div id="specialty-modal"></div>
  `;
};

// Appointments Page
const loadAppointmentsPage = async (container) => {
  const response = await api.getAppointments();
  const appointments = response.data;

  container.innerHTML = `
    <div class="page-header">
      <h1>مدیریت نوبت‌ها</h1>
    </div>

    <div class="table-container">
      <div class="table-header">
        <h2>لیست نوبت‌ها</h2>
        <select id="filter-status" class="search-input" style="width: auto;">
          <option value="">همه وضعیت‌ها</option>
          <option value="pending">در انتظار</option>
          <option value="confirmed">تایید شده</option>
          <option value="completed">انجام شده</option>
          <option value="cancelled">لغو شده</option>
        </select>
      </div>
      <table id="appointments-table">
        <thead>
          <tr>
            <th>شماره</th>
            <th>بیمار</th>
            <th>پزشک</th>
            <th>تاریخ</th>
            <th>ساعت</th>
            <th>نوع</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          ${renderAppointmentsTable(appointments)}
        </tbody>
      </table>
    </div>
  `;

  document.getElementById('filter-status').addEventListener('change', async (e) => {
    const status = e.target.value;
    const response = await api.getAppointments(status ? { status } : {});
    document.querySelector('#appointments-table tbody').innerHTML = renderAppointmentsTable(response.data);
  });
};

const renderAppointmentsTable = (appointments) => {
  if (appointments.length === 0) {
    return '<tr><td colspan="8" style="text-align:center;">نوبتی یافت نشد</td></tr>';
  }

  return appointments.map(apt => `
    <tr>
      <td>${apt.id}</td>
      <td>${escapeHtml(apt.patient_name)}</td>
      <td>${escapeHtml(apt.doctor_name)}</td>
      <td>${escapeHtml(apt.appointment_date)}</td>
      <td>${escapeHtml(apt.appointment_time)}</td>
      <td>${escapeHtml(apt.type)}</td>
      <td><span class="badge badge-${getStatusBadge(apt.status)}">${getStatusText(apt.status)}</span></td>
      <td class="action-buttons">
        ${apt.status === 'pending' ? `
          <button class="btn btn-sm btn-success" onclick="updateAppointmentStatus(${apt.id}, 'confirmed')">تایید</button>
          <button class="btn btn-sm btn-danger" onclick="updateAppointmentStatus(${apt.id}, 'cancelled')">لغو</button>
        ` : ''}
      </td>
    </tr>
  `).join('');
};

window.updateAppointmentStatus = async (id, status) => {
  try {
    await api.updateAppointmentStatus(id, status);
    showToast('وضعیت نوبت به‌روزرسانی شد', 'success');
    loadPage('appointments');
  } catch (error) {
    // Error shown
  }
};

// Staff Page
const loadUsersPage = async (container) => {
  const response = await api.getStaff();
  const staff = response.data || [];
  container.innerHTML = `
    <div class="page-header"><h1>مدیریت منشی‌ها</h1><button class="btn btn-primary btn-sm" onclick="showSecretaryModal()">+ تعریف منشی</button></div>
    <div class="card" style="margin-bottom:1rem;"><p style="color:var(--text2);">منشی‌ها می‌توانند برنامه پزشکان، تاریخ‌های حضور و وضعیت نوبت‌ها را مدیریت کنند؛ دسترسی به مدیریت کاربران و تنظیمات ندارند.</p></div>
    <div class="table-wrap"><table><thead><tr><th>نام</th><th>نام کاربری</th><th>تلفن</th><th>ایمیل</th><th>وضعیت</th><th>عملیات</th></tr></thead><tbody>
      ${staff.length ? staff.map(user => `<tr><td>${escapeHtml(user.full_name)}</td><td>${escapeHtml(user.username)}</td><td>${escapeHtml(user.phone)}</td><td>${escapeHtml(user.email || '-')}</td><td><span class="badge badge-${user.is_active ? 'success' : 'danger'}">${user.is_active ? 'فعال' : 'غیرفعال'}</span></td><td><button class="btn btn-sm ${user.is_active ? 'btn-danger' : 'btn-success'}" onclick="toggleSecretary(${user.id}, ${!user.is_active})">${user.is_active ? 'غیرفعال‌سازی' : 'فعال‌سازی'}</button></td></tr>`).join('') : '<tr><td colspan="6" style="text-align:center;">هنوز منشی تعریف نشده است</td></tr>'}
    </tbody></table></div><div id="secretary-modal"></div>`;
};

window.showSecretaryModal = () => {
  document.getElementById('secretary-modal').innerHTML = `
    <div class="modal-overlay" onclick="if(event.target===this)this.innerHTML=''">
      <div class="modal" onclick="event.stopPropagation()"><h3>تعریف حساب منشی</h3>
        <form id="secretary-form">
          <div class="form-group"><label>نام و نام خانوادگی *</label><input name="full_name" required></div>
          <div class="form-group"><label>نام کاربری *</label><input name="username" pattern="[A-Za-z0-9_.-]{3,40}" required></div>
          <div class="form-group"><label>رمز عبور *</label><input name="password" type="password" minlength="8" required></div>
          <div class="form-group"><label>موبایل *</label><input name="phone" type="tel" required></div>
          <div class="form-group"><label>ایمیل</label><input name="email" type="email"></div>
          <div class="flex flex-between"><button type="button" class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">انصراف</button><button class="btn btn-primary">ذخیره</button></div>
        </form>
      </div>
    </div>`;
  document.getElementById('secretary-form').addEventListener('submit', async event => {
    event.preventDefault();
    try { await api.createSecretary(Object.fromEntries(new FormData(event.target).entries())); showToast('منشی با موفقیت تعریف شد'); loadPage('users'); } catch (_) {}
  });
};

window.toggleSecretary = async (id, active) => {
  try { await api.updateStaffStatus(id, active); showToast('وضعیت منشی به‌روزرسانی شد'); loadPage('users'); } catch (_) {}
};

// Doctors' schedules Page
const persianWeek = [
  ['saturday', 'شنبه'], ['sunday', 'یکشنبه'], ['monday', 'دوشنبه'], ['tuesday', 'سه‌شنبه'],
  ['wednesday', 'چهارشنبه'], ['thursday', 'پنجشنبه'], ['friday', 'جمعه']
];
const toPersianDate = value => new Intl.DateTimeFormat('fa-IR-u-ca-persian', { dateStyle: 'full' }).format(new Date(`${value}T00:00:00Z`));
const persianToLatin = value => String(value || '').replace(/[۰-۹]/g, digit => '۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)).replace(/[٠-٩]/g, digit => '٠١٢٣٤٥٦٧٨٩'.indexOf(digit));
const isGregorianDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value);
const jalaliToGregorian = input => {
  const parts = persianToLatin(input).replace(/[.\-]/g, '/').split('/').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return null;
  let [jy, jm, jd] = parts;
  if (jy < 1200 || jm < 1 || jm > 12 || jd < 1 || jd > (jm <= 6 ? 31 : jm === 12 ? 30 : 30)) return null;
  jy -= 979;
  let days = 365 * jy + Math.floor(jy / 33) * 8 + Math.floor((jy % 33 + 3) / 4) + jd - 1;
  for (let i = 1; i < jm; i++) days += i <= 6 ? 31 : 30;
  let gy = 1600 + 400 * Math.floor(days / 146097); days %= 146097;
  if (days > 36524) { gy += 100 * Math.floor(--days / 36524); days %= 36524; if (days >= 365) days++; }
  gy += 4 * Math.floor(days / 1461); days %= 1461;
  if (days > 365) { gy += Math.floor((days - 1) / 365); days = (days - 1) % 365; }
  let gd = days + 1; const leap = gy % 4 === 0 && (gy % 100 !== 0 || gy % 400 === 0);
  const monthDays = [0,31,leap ? 29 : 28,31,30,31,30,31,31,30,31,30,31]; let gm = 1;
  while (gm <= 12 && gd > monthDays[gm]) gd -= monthDays[gm++];
  return `${gy}-${String(gm).padStart(2, '0')}-${String(gd).padStart(2, '0')}`;
};

const loadSchedulesPage = async (container) => {
  const response = await api.getDoctors({ limit: 100, available: 'true' });
  const doctors = response.data || [];
  container.innerHTML = `<div class="page-header"><h1>برنامه و زمان‌بندی پزشکان</h1></div><div class="card" style="margin-bottom:1rem;"><p style="color:var(--text2);">برنامه هفتگی یا یک تاریخ خاص را ثبت کنید. تاریخ‌ها در فرم بیمار به شمسی نمایش داده می‌شوند.</p></div><div class="schedule-doctors">${doctors.map(doc => `<div class="card flex flex-between" style="margin-bottom:.6rem;"><div><strong>${escapeHtml(doc.full_name)}</strong><small style="display:block;color:var(--text2);">${escapeHtml(doc.specialty_name || '')}</small></div><button class="btn btn-primary btn-sm" onclick="showScheduleModal(${doc.id}, '${escapeHtml(doc.full_name)}')">تنظیم برنامه</button></div>`).join('')}</div>`;
};

window.showScheduleModal = async (doctorId, doctorName) => {
  const [scheduleResponse, datesResponse] = await Promise.all([api.getSchedule(doctorId), api.getScheduleDates(doctorId)]);
  const schedule = scheduleResponse.data || {};
  const overrides = datesResponse.data || [];
  const daysHtml = persianWeek.map(([key, label]) => { const day = schedule[key] || {}; return `<div class="schedule-row"><label><input type="checkbox" data-day="${key}" ${day.enabled ? 'checked' : ''}> ${label}</label><input type="time" data-start="${key}" value="${escapeHtml(day.start || '09:00')}"><span>تا</span><input type="time" data-end="${key}" value="${escapeHtml(day.end || '13:00')}"><input type="number" data-duration="${key}" min="5" max="240" step="5" value="${escapeHtml(day.duration || 30)}" title="مدت نوبت (دقیقه)"></div>`; }).join('');
  const overrideRows = overrides.map(item => `<tr><td>${escapeHtml(toPersianDate(item.schedule_date))}</td><td>${item.enabled ? `${escapeHtml(item.start_time || '')} تا ${escapeHtml(item.end_time || '')}` : 'تعطیل'}</td><td>${escapeHtml(item.note || '-')}</td><td><button class="btn btn-sm btn-danger" onclick="deleteScheduleOverride(${doctorId}, '${item.schedule_date}')">حذف</button></td></tr>`).join('');
  const host = document.createElement('div'); host.id = 'schedule-modal-host'; host.innerHTML = `<div class="modal-overlay" onclick="if(event.target===this)this.remove()"><div class="modal schedule-modal" onclick="event.stopPropagation()"><h3>برنامه ${escapeHtml(doctorName)}</h3><p style="color:var(--text2);font-size:.85rem;">فعال‌سازی روز، ساعت شروع، پایان و مدت هر نوبت را مشخص کنید.</p><div class="schedule-form">${daysHtml}</div><button class="btn btn-primary" id="save-weekly-schedule">ذخیره برنامه هفتگی</button><hr><h3>افزودن برنامه برای تاریخ خاص</h3><form id="date-override-form"><div class="form-row"><div class="form-group"><label>تاریخ شمسی (مثال: ۱۴۰۴/۰۷/۱۵)</label><input name="persian_date" placeholder="۱۴۰۴/۰۷/۱۵" inputmode="numeric" required><small class="date-convert-hint" id="date-convert-hint"></small></div><input name="schedule_date" type="hidden" required></div><div class="form-row"><div class="form-group"><label>از ساعت</label><input name="start_time" type="time" value="09:00"></div><div class="form-group"><label>تا ساعت</label><input name="end_time" type="time" value="13:00"></div></div><div class="form-row"><div class="form-group"><label><input type="checkbox" name="enabled" checked> روز کاری است</label></div><div class="form-group"><label>مدت هر نوبت</label><input name="slot_duration" type="number" min="5" max="240" value="30"></div></div><div class="form-group"><label>یادداشت</label><input name="note" placeholder="مثلاً شیفت فوق‌العاده"></div><button class="btn btn-secondary">ثبت تاریخ خاص</button></form><div class="table-wrap" style="margin-top:1rem;"><table><thead><tr><th>تاریخ</th><th>ساعت</th><th>یادداشت</th><th></th></tr></thead><tbody>${overrideRows || '<tr><td colspan="4" style="text-align:center;">تاریخ خاصی ثبت نشده است</td></tr>'}</tbody></table></div></div></div>`;
  document.body.appendChild(host);
  document.getElementById('save-weekly-schedule').addEventListener('click', async () => {
    const working_hours = {};
    persianWeek.forEach(([key]) => { working_hours[key] = { enabled: host.querySelector(`[data-day="${key}"]`).checked, start: host.querySelector(`[data-start="${key}"]`).value, end: host.querySelector(`[data-end="${key}"]`).value, duration: Number(host.querySelector(`[data-duration="${key}"]`).value) || 30 }; });
    try { await api.updateSchedule(doctorId, working_hours); showToast('برنامه هفتگی ذخیره شد'); } catch (_) {}
  });
  const dateForm = document.getElementById('date-override-form');
  dateForm.querySelector('[name="persian_date"]').addEventListener('input', event => {
    const converted = jalaliToGregorian(event.target.value);
    dateForm.querySelector('[name="schedule_date"]').value = converted || '';
    document.getElementById('date-convert-hint').textContent = converted ? `معادل میلادی: ${converted}` : 'فرمت را به صورت سال/ماه/روز وارد کنید';
  });
  dateForm.addEventListener('submit', async event => {
    event.preventDefault(); const data = Object.fromEntries(new FormData(event.target).entries()); data.enabled = event.target.enabled.checked; data.slot_duration = Number(data.slot_duration) || 30;
    if (!isGregorianDate(data.schedule_date)) return showToast('تاریخ شمسی نامعتبر است', 'error');
    try { await api.saveScheduleDate(doctorId, data); showToast('تاریخ خاص ذخیره شد'); showScheduleModal(doctorId, doctorName); host.remove(); } catch (_) {}
  });
};

window.deleteScheduleOverride = async (doctorId, date) => { try { await api.deleteScheduleDate(doctorId, date); showToast('تاریخ خاص حذف شد'); document.getElementById('schedule-modal-host')?.remove(); } catch (_) {} };

// Departments Page
const loadDepartmentsPage = async (container) => {
  const response = await api.getDepartments();
  const departments = response.data;

  container.innerHTML = `
    <div class="page-header">
      <h1>مدیریت بخش‌ها</h1>
    </div>

    <div class="table-container">
      <div class="table-header">
        <h2>لیست بخش‌ها</h2>
        <button class="btn btn-primary btn-sm" onclick="showDepartmentModal()">+ افزودن بخش</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>نام</th>
            <th>طبقه</th>
            <th>تلفن</th>
            <th>مسئول بخش</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          ${departments.map(dept => `
            <tr>
              <td>${escapeHtml(dept.name_fa)}</td>
              <td>طبقه ${escapeHtml(dept.floor || '-')}</td>
              <td>${escapeHtml(dept.phone || '-')}</td>
              <td>${escapeHtml(dept.head_doctor_name || '-')}</td>
              <td><span class="badge badge-${dept.is_active ? 'success' : 'danger'}">${dept.is_active ? 'فعال' : 'غیرفعال'}</span></td>
              <td class="action-buttons">
                <button class="btn btn-sm btn-primary" onclick="editDepartment(${dept.id})">ویرایش</button>
                <button class="btn btn-sm btn-danger" onclick="deleteDepartment(${dept.id})">حذف</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div id="department-modal"></div>
  `;
};

// Virtual tour editor (kept inside the authenticated admin panel)
const loadTourPage = async (container) => {
  container.innerHTML = `
    <div class="page-header"><h1>ویرایش تور مجازی</h1></div>
    <div class="card mb-2"><p style="color:var(--text2);line-height:2;">عنوان، محل و طبقه تصاویر تور را ویرایش کنید. تغییرات پس از ذخیره برای همه بازدیدکنندگان سایت اعمال می‌شود.</p></div>
    <div class="tour-editor-toolbar">
      <input id="admin-tour-search" type="search" placeholder="جستجوی تصویر یا محل...">
      <button class="btn btn-primary" id="admin-tour-sort" type="button">مرتب‌سازی</button>
      <button class="btn btn-secondary" id="admin-tour-save" type="button">ذخیره تغییرات</button>
      <button class="btn btn-secondary" id="admin-tour-reset" type="button">بازنشانی</button>
    </div>
    <div class="tour-editor-grid" id="admin-tour-grid"><div class="card">در حال خواندن تصاویر تور...</div></div>
  `;
  const grid = document.getElementById('admin-tour-grid');
  const search = document.getElementById('admin-tour-search');
  const floors = ['زیرزمین', 'همکف', 'طبقه اول', 'طبقه دوم', 'طبقه سوم', 'طبقه چهارم', 'سایر'];
  let scenes = [];
  const esc = value => escapeHtml(value);
  const options = selected => floors.map(floor => `<option ${floor === selected ? 'selected' : ''}>${esc(floor)}</option>`).join('');
  const render = () => {
    const query = search.value.trim().toLowerCase();
    const visible = scenes.filter(scene => !query || [scene.originalLabel, scene.title, scene.location, scene.floor].join(' ').toLowerCase().includes(query));
    grid.innerHTML = visible.length ? visible.map(scene => `<article class="tour-editor-card" data-id="${esc(scene.id)}"><img src="${esc(OmidTour.assetUrl(scene.thumbnail))}" alt="${esc(scene.title)}" loading="lazy"><div><small>تصویر ${scene.originalIndex + 1}</small><code>${esc(scene.originalLabel)}</code><label>عنوان<input class="tour-title-input" value="${esc(scene.title)}"></label><label>محل<input class="tour-location-input" value="${esc(scene.location)}"></label><label>طبقه<select class="tour-floor-input">${options(scene.floor)}</select></label><label>ترتیب<input class="tour-order-input" type="number" min="1" value="${esc(scene.order)}"></label></div></article>`).join('') : '<div class="card">تصویری پیدا نشد.</div>';
  };
  const collect = () => grid.querySelectorAll('.tour-editor-card').forEach(card => { const scene = scenes.find(item => item.id === card.dataset.id); if (!scene) return; scene.title = card.querySelector('.tour-title-input').value.trim() || scene.originalLabel; scene.location = card.querySelector('.tour-location-input').value.trim(); scene.floor = card.querySelector('.tour-floor-input').value; scene.order = Math.max(1, Number(card.querySelector('.tour-order-input').value) || scene.originalIndex + 1); });
  try {
    const sourceResponse = await fetch(`${OmidTour.BASE}script.js`);
    const sourceScenes = OmidTour.parseScenes(await sourceResponse.text());
    let savedScenes;
    try {
      const savedResponse = await api.getTourSettings();
      savedScenes = savedResponse.data?.scenes;
    } catch (_) {
      savedScenes = undefined;
    }
    scenes = OmidTour.mergeSaved(sourceScenes, savedScenes);
    render();
    document.getElementById('admin-tour-save').onclick = async () => { collect(); try { await api.saveTourSettings(scenes); OmidTour.save(scenes); showToast('تنظیمات تور ذخیره شد'); } catch (_) {} };
    document.getElementById('admin-tour-sort').onclick = () => { collect(); scenes = OmidTour.ordered(scenes); scenes.forEach((scene, index) => { scene.order = index + 1; }); render(); };
    document.getElementById('admin-tour-reset').onclick = async () => { if (!confirm('تنظیمات تور بازنشانی شود؟')) return; scenes = scenes.map((scene, index) => Object.assign({}, scene, { title: scene.originalLabel, location: '', floor: 'همکف', order: index + 1 })); try { await api.saveTourSettings(scenes); OmidTour.clear(); render(); showToast('تنظیمات تور بازنشانی شد'); } catch (_) {} };
    search.oninput = render;
  } catch (_) { grid.innerHTML = '<div class="card">خواندن فایل تور ممکن نشد.</div>'; }
};

// Reviews Page
const loadReviewsPage = async (container) => {
  const response = await api.getReviews({ approved_only: 'false' });
  const reviews = response.data;

  container.innerHTML = `
    <div class="page-header">
      <h1>مدیریت نظرات</h1>
    </div>

    <div class="table-container">
      <div class="table-header">
        <h2>لیست نظرات</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>بیمار</th>
            <th>امتیاز</th>
            <th>نظر</th>
            <th>تاریخ</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          ${reviews.map(review => `
            <tr>
              <td>${escapeHtml(review.patient_name)}</td>
              <td>${'⭐'.repeat(Math.max(0, Math.min(5, Number(review.rating) || 0)))}</td>
              <td>${escapeHtml(review.comment || '-')}</td>
              <td>${new Date(review.created_at).toLocaleDateString('fa-IR')}</td>
              <td><span class="badge badge-${review.is_approved ? 'success' : 'warning'}">${review.is_approved ? 'تایید شده' : 'در انتظار'}</span></td>
              <td class="action-buttons">
                ${!review.is_approved ? `
                  <button class="btn btn-sm btn-success" onclick="approveReview(${review.id})">تایید</button>
                ` : ''}
                <button class="btn btn-sm btn-danger" onclick="deleteReview(${review.id})">حذف</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
};

window.approveReview = async (id) => {
  try {
    await api.approveReview(id);
    showToast('نظر تایید شد', 'success');
    loadPage('reviews');
  } catch (error) {
    // Error shown
  }
};

window.deleteReview = async (id) => {
  if (!confirm('آیا از حذف این نظر اطمینان دارید؟')) return;

  try {
    await api.deleteReview(id);
    showToast('نظر حذف شد', 'success');
    loadPage('reviews');
  } catch (error) {
    // Error shown
  }
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Login form
  document.getElementById('login-form')?.addEventListener('submit', handleLogin);
  
  // Logout button
  document.getElementById('logout-btn')?.addEventListener('click', handleLogout);

  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      loadPage(page);
    });
  });

  // Check if user is logged in
  if (state.token) {
    showDashboard();
  }
});
