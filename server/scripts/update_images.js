const { db, initDatabase } = require('../config/database');

const imageMap = require('/tmp/doctor_image_map.json');

async function main() {
  await initDatabase();

  // Check if image_local column exists
  let hasColumn = true;
  try {
    db.prepare('SELECT image_local FROM doctors LIMIT 1').all();
  } catch (e) {
    hasColumn = false;
    db.exec('ALTER TABLE doctors ADD COLUMN image_local TEXT DEFAULT NULL');
    console.log('Added image_local column');
  }

  let count = 0;
  for (const [docId, imageFile] of Object.entries(imageMap)) {
    db.prepare('UPDATE doctors SET image_local = ? WHERE id = ?').run(imageFile, docId);
    count++;
  }

  console.log(`Updated ${count} doctors with local image paths`);
  
  // Verify
  const rows = db.prepare('SELECT id, image_local FROM doctors WHERE image_local IS NOT NULL LIMIT 5').all();
  rows.forEach(r => console.log(`  ID=${r.id} -> ${r.image_local}`));

  db.close();
}

main().catch(console.error);
