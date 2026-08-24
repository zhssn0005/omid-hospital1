const fs = require('fs');
const path = require('path');
const { db, initDatabase } = require('../../server/config/database');

const sqlString = value => value === null || value === undefined ? 'NULL' : `'${String(value).replace(/'/g, "''")}'`;
const number = value => Number.isFinite(Number(value)) ? String(Number(value)) : 'NULL';
const json = value => value === null || value === undefined ? 'NULL' : sqlString(value);

function insert(table, columns, rows) {
  if (!rows.length) return '';
  return rows.map(row => `INSERT OR IGNORE INTO ${table} (${columns.join(', ')}) VALUES (${row.join(', ')});`).join('\n');
}

async function main() {
  await initDatabase();
  const specialties = db.prepare('SELECT id, name_fa, name_en, slug, icon, description, image, display_order, is_active FROM specialties').all();
  const doctors = db.prepare(`SELECT id, medical_code, specialty_id, bio, education, experience_years, consultation_fee, office_address, office_phone, office_lat, office_lng, working_hours, accepts_insurance, insurance_types, rating, review_count, is_available, is_featured, image_local FROM doctors`).all();
  const departments = db.prepare('SELECT name_fa, name_en, slug, description, icon, image, floor, phone, head_doctor_id, is_active, display_order FROM departments').all();
  const settings = db.prepare('SELECT key, value, description FROM settings').all();

  const lines = [
    '-- Generated from the local database. No passwords or private user rows are exported.',
    insert('specialties', ['id', 'name_fa', 'name_en', 'slug', 'icon', 'description', 'image', 'display_order', 'is_active'], specialties.map(row => [row.id, sqlString(row.name_fa), sqlString(row.name_en), sqlString(row.slug), sqlString(row.icon), sqlString(row.description), sqlString(row.image), number(row.display_order), number(row.is_active)])),
    insert('doctors', ['id', 'medical_code', 'specialty_id', 'bio', 'education', 'experience_years', 'consultation_fee', 'office_address', 'office_phone', 'office_lat', 'office_lng', 'working_hours', 'accepts_insurance', 'insurance_types', 'rating', 'review_count', 'is_available', 'is_featured', 'image_local'], doctors.map(row => [row.id, sqlString(row.medical_code), row.specialty_id, sqlString(row.bio), sqlString(row.education), number(row.experience_years), number(row.consultation_fee), sqlString(row.office_address), sqlString(row.office_phone), number(row.office_lat), number(row.office_lng), json(row.working_hours), number(row.accepts_insurance), json(row.insurance_types), number(row.rating), number(row.review_count), number(row.is_available), number(row.is_featured), sqlString(row.image_local)])),
    insert('departments', ['name_fa', 'name_en', 'slug', 'description', 'icon', 'image', 'floor', 'phone', 'head_doctor_id', 'is_active', 'display_order'], departments.map(row => [sqlString(row.name_fa), sqlString(row.name_en), sqlString(row.slug), sqlString(row.description), sqlString(row.icon), sqlString(row.image), number(row.floor), sqlString(row.phone), number(row.head_doctor_id), number(row.is_active), number(row.display_order)])),
    insert('settings', ['key', 'value', 'description'], settings.map(row => [sqlString(row.key), sqlString(row.value), sqlString(row.description)]))
  ].filter(Boolean).join('\n\n');

  const destination = path.join(__dirname, '../migrations/0002_seed_content.sql');
  fs.writeFileSync(destination, `${lines}\n`);
  console.log(`Exported ${doctors.length} doctors, ${specialties.length} specialties, ${departments.length} departments to ${destination}`);
  db.close();
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
