# Database Schema - Omid Hospital Management System

## Tables Structure

### 1. users
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE,
  password_hash TEXT NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('admin', 'doctor', 'patient')),
  avatar TEXT,
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 2. specialties
```sql
CREATE TABLE specialties (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name_fa TEXT NOT NULL,
  name_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT,
  description TEXT,
  image TEXT,
  display_order INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 3. doctors
```sql
CREATE TABLE doctors (
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
  working_hours TEXT, -- JSON format
  accepts_insurance INTEGER DEFAULT 0,
  insurance_types TEXT, -- JSON array
  rating REAL DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  is_available INTEGER DEFAULT 1,
  is_featured INTEGER DEFAULT 0,
  image TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (specialty_id) REFERENCES specialties(id)
);
```

### 4. departments
```sql
CREATE TABLE departments (
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
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (head_doctor_id) REFERENCES doctors(id)
);
```

### 5. appointments
```sql
CREATE TABLE appointments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  patient_id INTEGER NOT NULL,
  doctor_id INTEGER NOT NULL,
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  type TEXT NOT NULL CHECK(type IN ('in-person', 'online-chat', 'online-video', 'phone')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  notes TEXT,
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  patient_age INTEGER,
  reason TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (patient_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE
);
```

### 6. reviews
```sql
CREATE TABLE reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  doctor_id INTEGER NOT NULL,
  patient_id INTEGER NOT NULL,
  appointment_id INTEGER,
  rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
  comment TEXT,
  is_approved INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE,
  FOREIGN KEY (patient_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (appointment_id) REFERENCES appointments(id) ON DELETE SET NULL
);
```

### 7. faqs
```sql
CREATE TABLE faqs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  doctor_id INTEGER,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  display_order INTEGER DEFAULT 0,
  is_active INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE
);
```

### 8. blog_posts
```sql
CREATE TABLE blog_posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  image TEXT,
  author_id INTEGER NOT NULL,
  category TEXT,
  tags TEXT, -- JSON array
  views INTEGER DEFAULT 0,
  is_published INTEGER DEFAULT 0,
  published_at DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES users(id)
);
```

### 9. consultations
```sql
CREATE TABLE consultations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  appointment_id INTEGER NOT NULL UNIQUE,
  room_id TEXT, -- For video/chat sessions
  start_time DATETIME,
  end_time DATETIME,
  duration_minutes INTEGER,
  prescription TEXT,
  notes TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (appointment_id) REFERENCES appointments(id) ON DELETE CASCADE
);
```

### 10. settings
```sql
CREATE TABLE settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  description TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login
- POST `/api/auth/logout` - Logout
- GET `/api/auth/me` - Get current user
- PUT `/api/auth/profile` - Update profile

### Users (Admin only)
- GET `/api/users` - List all users
- GET `/api/users/:id` - Get user by ID
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user
- PUT `/api/users/:id/role` - Change user role

### Specialties
- GET `/api/specialties` - List all specialties
- GET `/api/specialties/:id` - Get specialty by ID
- POST `/api/specialties` - Create specialty (Admin)
- PUT `/api/specialties/:id` - Update specialty (Admin)
- DELETE `/api/specialties/:id` - Delete specialty (Admin)

### Doctors
- GET `/api/doctors` - List all doctors (with filters)
- GET `/api/doctors/:id` - Get doctor details
- POST `/api/doctors` - Create doctor (Admin)
- PUT `/api/doctors/:id` - Update doctor (Admin/Doctor)
- DELETE `/api/doctors/:id` - Delete doctor (Admin)
- GET `/api/doctors/:id/schedule` - Get doctor schedule
- PUT `/api/doctors/:id/schedule` - Update doctor schedule (Doctor)
- GET `/api/doctors/:id/appointments` - Get doctor appointments

### Departments
- GET `/api/departments` - List all departments
- GET `/api/departments/:id` - Get department by ID
- POST `/api/departments` - Create department (Admin)
- PUT `/api/departments/:id` - Update department (Admin)
- DELETE `/api/departments/:id` - Delete department (Admin)

### Appointments
- GET `/api/appointments` - List appointments (filtered by role)
- GET `/api/appointments/:id` - Get appointment by ID
- POST `/api/appointments` - Create appointment
- PUT `/api/appointments/:id` - Update appointment
- DELETE `/api/appointments/:id` - Cancel appointment
- PUT `/api/appointments/:id/status` - Update appointment status
- GET `/api/appointments/doctor/:doctorId/available-slots` - Get available time slots

### Reviews
- GET `/api/reviews` - List all reviews
- GET `/api/reviews/doctor/:doctorId` - Get doctor reviews
- POST `/api/reviews` - Create review
- PUT `/api/reviews/:id` - Update review
- DELETE `/api/reviews/:id` - Delete review
- PUT `/api/reviews/:id/approve` - Approve review (Admin)

### FAQs
- GET `/api/faqs` - List all FAQs
- GET `/api/faqs/doctor/:doctorId` - Get doctor FAQs
- POST `/api/faqs` - Create FAQ (Admin/Doctor)
- PUT `/api/faqs/:id` - Update FAQ
- DELETE `/api/faqs/:id` - Delete FAQ

### Blog
- GET `/api/blog` - List all posts
- GET `/api/blog/:slug` - Get post by slug
- POST `/api/blog` - Create post (Admin)
- PUT `/api/blog/:id` - Update post
- DELETE `/api/blog/:id` - Delete post
- PUT `/api/blog/:id/publish` - Publish post

### Consultations
- GET `/api/consultations/:appointmentId` - Get consultation
- POST `/api/consultations` - Create consultation
- PUT `/api/consultations/:id` - Update consultation

### Settings (Admin only)
- GET `/api/settings` - Get all settings
- PUT `/api/settings/:key` - Update setting

### Stats & Dashboard
- GET `/api/stats/dashboard` - Get dashboard stats
- GET `/api/stats/doctors` - Doctor statistics
- GET `/api/stats/appointments` - Appointment statistics
