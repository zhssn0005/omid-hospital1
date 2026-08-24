-- The worker and admin panel support secretary accounts.
-- SQLite cannot alter an existing CHECK constraint in place, so this migration
-- recreates the users table while preserving all existing rows.
PRAGMA foreign_keys = OFF;

CREATE TABLE users_next (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  email TEXT UNIQUE,
  password_hash TEXT NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL DEFAULT 'patient' CHECK (role IN ('admin', 'doctor', 'patient', 'secretary')),
  avatar TEXT,
  is_active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users_next (id, username, email, password_hash, full_name, phone, role, avatar, is_active, created_at, updated_at)
SELECT id, username, email, password_hash, full_name, phone, role, avatar, is_active, created_at, updated_at FROM users;

DROP TABLE users;
ALTER TABLE users_next RENAME TO users;

PRAGMA foreign_keys = ON;
