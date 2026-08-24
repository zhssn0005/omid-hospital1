const initSqlJs = require('sql.js');
const path = require('path');
const fs = require('fs');

const projectRoot = path.resolve(__dirname, '../..');
const configuredDbPath = process.env.DB_PATH || path.join(projectRoot, 'data', 'omid_hospital.db');
const dbPath = path.isAbsolute(configuredDbPath)
  ? configuredDbPath
  : path.resolve(projectRoot, configuredDbPath);
const dbDir = path.dirname(dbPath);

// Create data directory if it doesn't exist
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Synchronous wrapper around sql.js
// sql.js is in-memory but we persist to disk on write
let SQL, _db;

// ─── Persistence helpers ──────────────────────────────────────────────────────
function saveDb() {
  try {
    const data = Buffer.from(_db.export());
    const tempPath = `${dbPath}.tmp`;
    fs.writeFileSync(tempPath, data);
    fs.renameSync(tempPath, dbPath);
  } catch (e) {
    console.error('DB save error:', e.message);
    try { fs.unlinkSync(`${dbPath}.tmp`); } catch (_) {}
    throw e;
  }
}

// ─── Synchronous-style API wrapper ───────────────────────────────────────────
// Mimics better-sqlite3 API: db.prepare(sql).get(...) / .all(...) / .run(...)
const db = {
  _db: null,

  prepare(sql) {
    return {
      _sql: sql,
      get(...params) {
        try {
          const stmt = _db.prepare(sql);
          stmt.bind(params.length ? params : []);
          if (stmt.step()) {
            const row = stmt.getAsObject();
            stmt.free();
            return row;
          }
          stmt.free();
          return undefined;
        } catch (e) {
          console.error('DB get error:', e.message, sql);
          throw e;
        }
      },
      all(...params) {
        try {
          const results = [];
          const stmt = _db.prepare(sql);
          stmt.bind(params.length ? params : []);
          while (stmt.step()) {
            results.push(stmt.getAsObject());
          }
          stmt.free();
          return results;
        } catch (e) {
          console.error('DB all error:', e.message, sql);
          throw e;
        }
      },
      run(...params) {
        try {
          const stmt = _db.prepare(sql);
          stmt.bind(params.length ? params : []);
          stmt.step();
          stmt.free();
          const changes = _db.getRowsModified();
          const lastId = _db.exec("SELECT last_insert_rowid()")[0]?.values[0][0] || 0;
          saveDb();
          return { changes, lastInsertRowid: lastId };
        } catch (e) {
          console.error('DB run error:', e.message, sql);
          throw e;
        }
      }
    };
  },

  exec(sql) {
    try {
      _db.run(sql);
      saveDb();
    } catch (e) {
      console.error('DB exec error:', e.message);
      throw e;
    }
  },

  pragma(sql) {
    try {
      _db.run(`PRAGMA ${sql}`);
    } catch (e) {
      // Ignore pragma errors (sql.js has limited pragma support)
    }
  },

  close() {
    if (_db) {
      saveDb();
      _db.close();
    }
  }
};

// ─── Schema ───────────────────────────────────────────────────────────────────
const SCHEMA = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE,
    password_hash TEXT NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL DEFAULT 'patient',
    avatar TEXT,
    is_active INTEGER DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS specialties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name_fa TEXT NOT NULL,
    name_en TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    icon TEXT,
    description TEXT,
    image TEXT,
    display_order INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS doctors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER UNIQUE,
    medical_code TEXT UNIQUE NOT NULL,
    specialty_id INTEGER NOT NULL,
    bio TEXT,
    education TEXT,
    experience_years INTEGER DEFAULT 0,
    consultation_fee REAL DEFAULT 0,
    office_address TEXT,
    office_phone TEXT,
    office_lat REAL,
    office_lng REAL,
    working_hours TEXT,
    accepts_insurance INTEGER DEFAULT 0,
    insurance_types TEXT,
    rating REAL DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    is_available INTEGER DEFAULT 1,
    is_featured INTEGER DEFAULT 0,
    image TEXT,
    image_local TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS departments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name_fa TEXT NOT NULL,
    name_en TEXT,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    icon TEXT,
    image TEXT,
    floor INTEGER,
    phone TEXT,
    head_doctor_id INTEGER,
    is_active INTEGER DEFAULT 1,
    display_order INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id INTEGER,
    doctor_id INTEGER NOT NULL,
    appointment_date TEXT NOT NULL,
    appointment_time TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'in-person',
    status TEXT NOT NULL DEFAULT 'pending',
    notes TEXT,
    patient_name TEXT NOT NULL,
    patient_phone TEXT NOT NULL,
    patient_age INTEGER,
    reason TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS doctor_schedule_dates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    doctor_id INTEGER NOT NULL,
    schedule_date TEXT NOT NULL,
    enabled INTEGER NOT NULL DEFAULT 1,
    start_time TEXT,
    end_time TEXT,
    slot_duration INTEGER NOT NULL DEFAULT 30,
    note TEXT,
    created_by INTEGER,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now')),
    UNIQUE (doctor_id, schedule_date)
  );

  CREATE INDEX IF NOT EXISTS doctor_schedule_dates_lookup
    ON doctor_schedule_dates (doctor_id, schedule_date);

  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    doctor_id INTEGER NOT NULL,
    patient_id INTEGER NOT NULL,
    appointment_id INTEGER,
    rating INTEGER NOT NULL DEFAULT 5,
    comment TEXT,
    is_approved INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS faqs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    doctor_id INTEGER,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category TEXT,
    display_order INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    image TEXT,
    author_id INTEGER NOT NULL,
    category TEXT,
    tags TEXT,
    views INTEGER DEFAULT 0,
    is_published INTEGER DEFAULT 0,
    published_at TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT UNIQUE NOT NULL,
    value TEXT,
    description TEXT,
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS consultations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    appointment_id INTEGER NOT NULL UNIQUE,
    room_id TEXT,
    start_time TEXT,
    end_time TEXT,
    duration_minutes INTEGER,
    prescription TEXT,
    notes TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );
`;

// ─── Initialize ───────────────────────────────────────────────────────────────
const initDatabase = async () => {
  if (!SQL) {
    SQL = await initSqlJs();
  }

  // Load existing database or create new
  if (fs.existsSync(dbPath)) {
    const fileBuffer = fs.readFileSync(dbPath);
    _db = new SQL.Database(fileBuffer);
    console.log('✅ Database loaded from file:', dbPath);
  } else {
    _db = new SQL.Database();
    console.log('✅ New database created at:', dbPath);
  }

  // Enable WAL-like behavior
  try { _db.run("PRAGMA journal_mode = MEMORY;"); } catch(e) {}

  // Run schema
  _db.run(SCHEMA);
  // Run migrations for columns added after initial release
  try { _db.run("ALTER TABLE doctors ADD COLUMN image_local TEXT DEFAULT NULL"); } catch(e) {}
  // Keep cancelled appointments from blocking the same slot while enforcing
  // uniqueness for all active appointments at the database boundary.
  _db.run("DROP INDEX IF EXISTS appointments_slot_unique");
  _db.run("DROP INDEX IF EXISTS appointments_slot_unique_active");
  _db.run("CREATE UNIQUE INDEX appointments_slot_unique_active ON appointments (doctor_id, appointment_date, appointment_time) WHERE status <> 'cancelled'");
  saveDb();
  console.log('✅ Database schema initialized');
};

module.exports = { db, initDatabase };
