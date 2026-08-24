-- Appointment scheduling: recurring weekly hours plus date-specific overrides.
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
