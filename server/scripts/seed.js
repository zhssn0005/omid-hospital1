const path = require('path');
require('dotenv').config();
require('dotenv').config({ path: path.join(__dirname, '../../.env.local'), override: true });
const bcrypt = require('bcryptjs');
const fs = require('fs');
const { db, initDatabase } = require('../config/database');

// Load real doctors data (scraped from omid.hospital)
function loadDoctors() {
  try {
    const jsonPath = path.join(__dirname, '../../data/all_doctors.json');
    const raw = fs.readFileSync(jsonPath, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    console.warn('⚠️  Could not load all_doctors.json, falling back to empty:', e.message);
    return { active: [], deceased: [] };
  }
}

// Map specialty name → icon + slug
const SPECIALTY_MAP = {
  'قلب و عروق': { icon: '❤️', slug: 'cardiology' },
  'گوارش و کبد': { icon: '🫁', slug: 'gastroenterology' },
  'گوارش': { icon: '🫁', slug: 'gastroenterology' },
  'چشم پزشکی': { icon: '👁️', slug: 'ophthalmology' },
  'چشم': { icon: '👁️', slug: 'ophthalmology' },
  'مغز و اعصاب': { icon: '🧠', slug: 'neurology' },
  'دندانپزشکی': { icon: '🦷', slug: 'dentistry' },
  'دندانپزشک': { icon: '🦷', slug: 'dentistry' },
  'پوست و مو': { icon: '✨', slug: 'dermatology' },
  'ارتوپدی': { icon: '🦴', slug: 'orthopedics' },
  'ارتوپد': { icon: '🦴', slug: 'orthopedics' },
  'گوش و حلق': { icon: '👂', slug: 'ent' },
  'گوش و حلق و بینی': { icon: '👂', slug: 'ent' },
  'ENT': { icon: '👂', slug: 'ent' },
  'حلق و بینی': { icon: '👂', slug: 'ent' },
  'ریه': { icon: '🫁', slug: 'pulmonology' },
  'زنان': { icon: '👶', slug: 'obgyn' },
  'زنان و زایمان': { icon: '👶', slug: 'obgyn' },
  'اطفال': { icon: '🧒', slug: 'pediatrics' },
  'کودکان': { icon: '🧒', slug: 'pediatrics' },
  'اورولوژی': { icon: '💧', slug: 'urology' },
  'کلیه و مجرای ادرار': { icon: '💧', slug: 'urology' },
  'کلیه ( نفرولوژیست)': { icon: '💧', slug: 'nephrology' },
  'جراحی عمومی': { icon: '🏥', slug: 'surgery' },
  'جراح عمومی': { icon: '🏥', slug: 'surgery' },
  'جراحی قلب': { icon: '❤️🫀', slug: 'cardiac-surgery' },
  'جراحی مغز و اعصاب': { icon: '🧠', slug: 'neurosurgery' },
  'جراح مغز و اعصاب': { icon: '🧠', slug: 'neurosurgery' },
  'جراحی پستان': { icon: '🏥', slug: 'breast-surgery' },
  'فوق تخصص جراحی و  زیبایی پستان': { icon: '🏥', slug: 'breast-surgery' },
  'جراحی قفسه سینه( توراکس)': { icon: '🫁', slug: 'thoracic-surgery' },
  'جراحی ستون فقرات': { icon: '🦴', slug: 'spine-surgery' },
  'جراحی لاپاراسکوپی': { icon: '🏥', slug: 'laparoscopy' },
  'جراحی سر و گردن': { icon: '🏥', slug: 'head-neck-surgery' },
  'غدد': { icon: '⚡', slug: 'endocrinology' },
  'داخلی': { icon: '💊', slug: 'internal-medicine' },
  'عفونی': { icon: '🦠', slug: 'infectious' },
  'روانپزشکی': { icon: '🧠', slug: 'psychiatry' },
  'روان پزشک': { icon: '🧘', slug: 'psychiatry' },
  'روانشناس': { icon: '🧘', slug: 'psychology' },
  'بیهوشی': { icon: '😴', slug: 'anesthesiology' },
  'بیهوشی(پدر)': { icon: '😴', slug: 'anesthesiology' },
  'رادیولوژی': { icon: '📷', slug: 'radiology' },
  'پاتولوژی': { icon: '🔬', slug: 'pathology' },
  'طب اورژانس': { icon: '🚑', slug: 'emergency' },
  'طب کار': { icon: '💼', slug: 'occupational' },
  'طب فیزیکی و توانبخشی': { icon: '🦾', slug: 'rehabilitation' },
  'فیزیوتراپی': { icon: '🦾', slug: 'physiotherapy' },
  'ژنتیک': { icon: '🧬', slug: 'genetics' },
  'پزشکی قانونی': { icon: '⚖️', slug: 'forensic' },
  'علوم آزمایشگاهی': { icon: '🔬', slug: 'laboratory' },
  'تجهیزات پزشکی': { icon: '🩺', slug: 'medical-equipment' },
  'آنکولوژی': { icon: '🎗️', slug: 'oncology' },
  'تغذیه': { icon: '🥗', slug: 'nutrition' },
  'کارشناس تغذیه': { icon: '🥗', slug: 'nutrition' },
  'شنوایی سنجی': { icon: '👂', slug: 'audiology' },
  'ادیومتری': { icon: '👂', slug: 'audiology' },
  'عمومی': { icon: '🩺', slug: 'general-practice' },
  'متخصص درد': { icon: '💉', slug: 'pain-management' },
  'کولورکتال': { icon: '🏥', slug: 'colorectal' },
  'دارو ساز': { icon: '💊', slug: 'pharmacy' },
  'داروخانه': { icon: '💊', slug: 'pharmacy' },
  'icu': { icon: '🏥', slug: 'icu' },
  'نورولوژی': { icon: '🧠', slug: 'neurology' },
  'زنان و زایمان': { icon: '👶', slug: 'obgyn' }
};

const seed = async () => {
  console.log('🌱 Omid Hospital — Database seeding\n');

  try {
    await initDatabase();

    // Check if already seeded (idempotent)
    const existing = db.prepare('SELECT COUNT(*) as cnt FROM doctors').get();
    if (existing && existing.cnt > 10) {
      console.log(`✅ Database already seeded (${existing.cnt} doctors). Skipping.`);
      db.close();
      return;
    }

    // Clear (only runs when empty / sample-only data exists)
    console.log('🗑️  Clearing sample data...');
    db.exec(`
      DELETE FROM reviews; DELETE FROM appointments; DELETE FROM consultations;
      DELETE FROM faqs; DELETE FROM blog_posts; DELETE FROM doctors;
      DELETE FROM departments; DELETE FROM specialties; DELETE FROM users; DELETE FROM settings;
    `);

    // ─── Admin user ─────────────────────────────────────────────────────────
    console.log('👤 Creating admin user...');
    const configuredAdminPassword = process.env.ADMIN_PASSWORD;
    if (process.env.NODE_ENV === 'production' && (!configuredAdminPassword || configuredAdminPassword.length < 12)) {
      throw new Error('ADMIN_PASSWORD must be set to at least 12 characters in production');
    }
    const adminPassword = await bcrypt.hash(configuredAdminPassword || 'admin123', 10);
    db.prepare(`
      INSERT INTO users (username, email, password_hash, full_name, phone, role)
      VALUES (?, ?, ?, ?, ?, 'admin')
    `).run(
      process.env.ADMIN_USERNAME || 'admin',
      process.env.ADMIN_EMAIL || 'admin@omid-hospital.ir',
      adminPassword,
      'مدیر سیستم',
      process.env.ADMIN_PHONE || '09123456789'
    );

    // ─── Specialties from real data ─────────────────────────────────────────
    console.log('🏥 Creating specialties from real data...');
    const doctorsData = loadDoctors();
    const allDoctors = doctorsData.active || [];

    const specialtyCounts = {};
    allDoctors.forEach(doc => {
      const key = (doc.specialty || '').trim();
      if (key) specialtyCounts[key] = (specialtyCounts[key] || 0) + 1;
    });

    const specialtyInsert = db.prepare(`
      INSERT INTO specialties (name_fa, name_en, slug, icon, display_order, is_active)
      VALUES (?, ?, ?, ?, ?, 1)
    `);

    const specialtyIds = {};
    let order = 1;
    const sortedSpecs = Object.entries(specialtyCounts).sort((a, b) => b[1] - a[1]);
    for (const [name, cnt] of sortedSpecs) {
      const meta = SPECIALTY_MAP[name] || { icon: '🏥', slug: 'spec-' + order };
      const slug = meta.slug + (specialtyIds[meta.slug] !== undefined ? '-' + order : '');
      try {
        const res = specialtyInsert.run(name, name, slug, meta.icon, order++);
        specialtyIds[name] = res.lastInsertRowid;
      } catch (e) {
        // duplicate slug — skip
      }
    }
    console.log(`   ${sortedSpecs.length} specialties`);

    // ─── Doctors from real data ─────────────────────────────────────────────
    console.log('👨‍⚕️ Importing doctors...');
    const doctorInsert = db.prepare(`
      INSERT INTO doctors (
        medical_code, specialty_id, bio, education, experience_years,
        consultation_fee, office_address, office_phone, working_hours,
        accepts_insurance, is_available, is_featured, rating, review_count, image
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const defaultHours = JSON.stringify({
      saturday: { enabled: true, start: '08:00', end: '14:00', duration: 30 },
      sunday: { enabled: true, start: '08:00', end: '14:00', duration: 30 },
      monday: { enabled: true, start: '08:00', end: '14:00', duration: 30 },
      tuesday: { enabled: true, start: '08:00', end: '14:00', duration: 30 },
      wednesday: { enabled: true, start: '08:00', end: '14:00', duration: 30 },
      thursday: { enabled: false }, friday: { enabled: false }
    });

    let imported = 0;
    allDoctors.forEach((doc, i) => {
      const specId = specialtyIds[(doc.specialty || '').trim()] || null;
      if (!specId) return;

      // Map remote image to local asset if available
      const slug = doc.slug || ('dr_' + i);
      const localImg = `/assets/doctors/${slug}.${guessExt(slug)}`;
      const rating = (3.5 + Math.random() * 1.5).toFixed(1);
      const fee = 300000 + Math.floor(Math.random() * 30) * 10000;

      try {
        doctorInsert.run(
          'MC' + (100000 + i),
          specId,
          `${doc.name} — ${doc.specialty}`,
          'دانشگاه علوم پزشکی تهران',
          Math.floor(Math.random() * 25) + 3,
          fee,
          'تهران جنت‌آباد مرکزی، خ شاهین شمالی، خ کبیری طامه، خ بهار — بیمارستان امید',
          '021-44480185',
          defaultHours,
          1,
          doc.hasBookingBtn ? 1 : 0,
          i < 8 ? 1 : 0,
          rating,
          Math.floor(Math.random() * 40) + 5,
          doc.img && doc.img.includes('wp-content') ? doc.img : localImg
        );
        imported++;
      } catch (e) {
        // skip malformed
      }
    });
    console.log(`   ${imported} doctors imported`);

    // ─── Departments ────────────────────────────────────────────────────────
    console.log('🏨 Creating departments...');
    const deptInsert = db.prepare(`
      INSERT INTO departments (name_fa, name_en, slug, floor, phone, is_active, display_order)
      VALUES (?, ?, ?, ?, ?, 1, ?)
    `);
    const departments = [
      ['اورژانس', 'Emergency', 'emergency', 1, '021-44480185'],
      ['کلینیک تخصصی داخلی', 'Internal Clinic', 'internal-clinic', 2, '021-44480185'],
      ['کلینیک تخصصی زنان', 'Gynecology Clinic', 'gynecology-clinic', 2, '021-44480185'],
      ['کلینیک تخصصی اطفال', 'Pediatric Clinic', 'pediatric-clinic', 2, '021-44480185'],
      ['بخش NICU (نوزادان)', 'NICU', 'nicu', 3, '021-44480185'],
      ['بخش IPD (بین‌الملل)', 'International Patient Dept', 'ipd', 4, '021-44480185'],
      ['بخش رویال (VIP)', 'Royal Ward', 'royal', 4, '021-44480185'],
      ['رادیولوژی و تصویربرداری', 'Radiology', 'radiology', 1, '021-44480185'],
      ['آزمایشگاه', 'Laboratory', 'laboratory', 1, '021-44480185'],
      ['فیزیوتراپی', 'Physiotherapy', 'physiotherapy', 2, '021-44480185']
    ];
    departments.forEach((d, i) => deptInsert.run(d[0], d[1], d[2], d[3], d[4], i + 1));

    // ─── Settings ───────────────────────────────────────────────────────────
    console.log('⚙️  Creating settings...');
    const settingsInsert = db.prepare('INSERT INTO settings (key, value, description) VALUES (?, ?, ?)');
    settingsInsert.run('hospital_name', 'بیمارستان تخصصی و فوق‌تخصصی امید', 'نام بیمارستان');
    settingsInsert.run('hospital_phone', '021-44480185', 'شماره تلفن بیمارستان');
    settingsInsert.run('hospital_fax', '021-44492187', 'شماره فکس');
    settingsInsert.run('hospital_address', 'تهران، جنت‌آباد مرکزی، خیابان شاهین شمالی، خیابان کبیری طامه، خیابان بهار', 'آدرس بیمارستان');
    settingsInsert.run('hospital_email', 'info@omid.hospital', 'ایمیل بیمارستان');
    settingsInsert.run('hospital_opened', 'پاییز ۱۳۹۵', 'سال افتتاح');

    console.log('\n✅ Database seeding completed successfully!');
    console.log(`   👨‍⚕️  ${imported} doctors`);
    console.log(`   🏥  ${sortedSpecs.length} specialties`);
    console.log(`   🏨  10 departments`);
    console.log('\n📝 Admin login:');
    console.log(`   username: ${process.env.ADMIN_USERNAME || 'admin'}\n`);

  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  } finally {
    db.close();
  }
};

// Guess local extension (check filesystem)
function guessExt(slug) {
  const dir = path.join(__dirname, '../../assets/doctors');
  for (const ext of ['.webp', '.jpg', '.png']) {
    if (fs.existsSync(path.join(dir, slug + ext))) return ext;
  }
  return '.jpg';
}

seed();
