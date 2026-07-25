require('dotenv').config();
const bcrypt = require('bcryptjs');
const { db, initDatabase } = require('../config/database');

const seed = async () => {
  console.log('🌱 Starting database seeding...\n');

  try {
    // Initialize database (async with sql.js)
    await initDatabase();

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    db.exec(`
      DELETE FROM reviews;
      DELETE FROM appointments;
      DELETE FROM consultations;
      DELETE FROM faqs;
      DELETE FROM blog_posts;
      DELETE FROM doctors;
      DELETE FROM departments;
      DELETE FROM specialties;
      DELETE FROM users;
      DELETE FROM settings;
    `);

    // Create admin user
    console.log('👤 Creating admin user...');
    const adminPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
    const adminInsert = db.prepare(`
      INSERT INTO users (username, email, password_hash, full_name, phone, role)
      VALUES (?, ?, ?, ?, ?, 'admin')
    `);
    adminInsert.run(
      process.env.ADMIN_USERNAME || 'admin',
      process.env.ADMIN_EMAIL || 'admin@omid-hospital.ir',
      adminPassword,
      'مدیر سیستم',
      process.env.ADMIN_PHONE || '09123456789'
    );

    // Create specialties
    console.log('🏥 Creating specialties...');
    const specialties = [
      { name_fa: 'قلب و عروق', name_en: 'Cardiology', slug: 'cardiology', icon: 'heart' },
      { name_fa: 'ارتوپدی', name_en: 'Orthopedics', slug: 'orthopedics', icon: 'bone' },
      { name_fa: 'روانپزشکی', name_en: 'Psychiatry', slug: 'psychiatry', icon: 'brain' },
      { name_fa: 'کودکان', name_en: 'Pediatrics', slug: 'pediatrics', icon: 'baby' },
      { name_fa: 'زنان و زایمان', name_en: 'Gynecology', slug: 'gynecology', icon: 'female' },
      { name_fa: 'داخلی', name_en: 'Internal Medicine', slug: 'internal-medicine', icon: 'stethoscope' },
      { name_fa: 'جراحی عمومی', name_en: 'General Surgery', slug: 'general-surgery', icon: 'scalpel' },
      { name_fa: 'چشم', name_en: 'Ophthalmology', slug: 'ophthalmology', icon: 'eye' },
      { name_fa: 'گوش و حلق و بینی', name_en: 'ENT', slug: 'ent', icon: 'ear' },
      { name_fa: 'پوست و مو', name_en: 'Dermatology', slug: 'dermatology', icon: 'skin' }
    ];

    const specialtyInsert = db.prepare(`
      INSERT INTO specialties (name_fa, name_en, slug, icon, display_order, is_active)
      VALUES (?, ?, ?, ?, ?, 1)
    `);

    const specialtyIds = {};
    specialties.forEach((spec, index) => {
      const result = specialtyInsert.run(spec.name_fa, spec.name_en, spec.slug, spec.icon, index + 1);
      specialtyIds[spec.slug] = result.lastInsertRowid;
    });

    // Create sample doctors
    console.log('👨‍⚕️ Creating sample doctors...');
    const doctorPassword = await bcrypt.hash('doctor123', 10);
    
    const sampleDoctors = [
      { name: 'دکتر محمد احمدی', specialty: 'cardiology', medical_code: 'MC123456', fee: 500000, exp: 15 },
      { name: 'دکتر فاطمه کریمی', specialty: 'pediatrics', medical_code: 'MC123457', fee: 400000, exp: 10 },
      { name: 'دکتر علی رضایی', specialty: 'orthopedics', medical_code: 'MC123458', fee: 600000, exp: 20 },
      { name: 'دکتر زهرا موسوی', specialty: 'gynecology', medical_code: 'MC123459', fee: 450000, exp: 12 },
      { name: 'دکتر حسین نوری', specialty: 'psychiatry', medical_code: 'MC123460', fee: 550000, exp: 18 }
    ];

    const workingHours = {
      saturday: { enabled: true, start: '08:00', end: '14:00', duration: 30 },
      sunday: { enabled: true, start: '08:00', end: '14:00', duration: 30 },
      monday: { enabled: true, start: '08:00', end: '14:00', duration: 30 },
      tuesday: { enabled: true, start: '08:00', end: '14:00', duration: 30 },
      wednesday: { enabled: true, start: '08:00', end: '14:00', duration: 30 },
      thursday: { enabled: false },
      friday: { enabled: false }
    };

    sampleDoctors.forEach((doc, index) => {
      // Create user for doctor
      const userInsert = db.prepare(`
        INSERT INTO users (username, email, password_hash, full_name, phone, role)
        VALUES (?, ?, ?, ?, ?, 'doctor')
      `);
      const userResult = userInsert.run(
        `doctor${index + 1}`,
        `doctor${index + 1}@omid-hospital.ir`,
        doctorPassword,
        doc.name,
        `0912345${6780 + index}`
      );

      // Create doctor profile
      const doctorInsert = db.prepare(`
        INSERT INTO doctors (
          user_id, medical_code, specialty_id, bio, education,
          experience_years, consultation_fee, office_address, office_phone,
          working_hours, is_available, is_featured, rating, review_count
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?)
      `);

      doctorInsert.run(
        userResult.lastInsertRowid,
        doc.medical_code,
        specialtyIds[doc.specialty],
        `متخصص ${specialties.find(s => s.slug === doc.specialty).name_fa} با سابقه درخشان`,
        'دانشگاه علوم پزشکی تهران، بورد تخصصی',
        doc.exp,
        doc.fee,
        'تهران، خیابان ولیعصر، پلاک 123',
        '02122334455',
        JSON.stringify(workingHours),
        index < 2 ? 1 : 0, // First 2 are featured
        (4 + Math.random()).toFixed(1),
        Math.floor(Math.random() * 50) + 10
      );
    });

    // Create departments
    console.log('🏨 Creating departments...');
    const departments = [
      { name_fa: 'اورژانس', name_en: 'Emergency', slug: 'emergency', floor: 1 },
      { name_fa: 'بخش جراحی', name_en: 'Surgery', slug: 'surgery', floor: 2 },
      { name_fa: 'بخش داخلی', name_en: 'Internal', slug: 'internal', floor: 3 },
      { name_fa: 'ICU', name_en: 'Intensive Care', slug: 'icu', floor: 4 },
      { name_fa: 'رادیولوژی', name_en: 'Radiology', slug: 'radiology', floor: 1 }
    ];

    const deptInsert = db.prepare(`
      INSERT INTO departments (name_fa, name_en, slug, floor, phone, is_active, display_order)
      VALUES (?, ?, ?, ?, ?, 1, ?)
    `);

    departments.forEach((dept, index) => {
      deptInsert.run(dept.name_fa, dept.name_en, dept.slug, dept.floor, '021-22334455', index + 1);
    });

    // Create settings
    console.log('⚙️  Creating settings...');
    const settingsInsert = db.prepare('INSERT INTO settings (key, value, description) VALUES (?, ?, ?)');
    settingsInsert.run('hospital_name', 'بیمارستان امید', 'نام بیمارستان');
    settingsInsert.run('hospital_phone', '021-22334455', 'شماره تلفن بیمارستان');
    settingsInsert.run('hospital_address', 'تهران، خیابان ولیعصر، نرسیده به پارک ملت', 'آدرس بیمارستان');
    settingsInsert.run('hospital_email', 'info@omid-hospital.ir', 'ایمیل بیمارستان');

    console.log('\n✅ Database seeding completed successfully!');
    console.log('\n📝 Login credentials:');
    console.log(`   Admin: ${process.env.ADMIN_USERNAME || 'admin'} / ${process.env.ADMIN_PASSWORD || 'admin123'}`);
    console.log(`   Doctor: doctor1 / doctor123`);
    console.log('');

  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  } finally {
    db.close();
  }
};

seed();
