require('dotenv').config();
require('dotenv').config({ path: require('path').join(__dirname, '../.env.local'), override: true });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');
const { db, initDatabase } = require('./config/database');
const { errorHandler, notFound } = require('./middleware/errorHandler');

// Create Express app first
const app = express();

// Fail closed in production instead of starting with unusable or guessable auth.
if (process.env.NODE_ENV === 'production') {
  const missing = ['JWT_SECRET'].filter(key => !process.env[key] || process.env[key].length < 32);
  if (missing.length) {
    throw new Error(`Missing or weak production secrets: ${missing.join(', ')}`);
  }
}

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS configuration. Same-origin requests do not need CORS; external clients
// must opt in explicitly through CORS_ORIGIN.
const corsOrigin = process.env.CORS_ORIGIN;
const corsOptions = {
  origin: corsOrigin ? corsOrigin.split(',').map(s => s.trim()) : false,
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'درخواست‌های بیش از حد - لطفاً بعداً تلاش کنید' }
});
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'تعداد تلاش‌ها بیش از حد مجاز است' }
});
app.use('/api/', limiter);
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);

// Body parser
app.use(express.json({ limit: '256kb' }));
app.use(express.urlencoded({ extended: true, limit: '256kb' }));

// Compression
app.use(compression());

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Serve static files — public directories only (NOT entire project root)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/pages', express.static(path.join(__dirname, '../pages')));
app.use('/admin', express.static(path.join(__dirname, '../admin')));

// Serve specific public root files (whitelist) — NEVER serve .env, data/*, server/*
const ROOT_PUBLIC_FILES = [
  'booking.html', 'manifest.json', 'service-worker.js',
  'robots.txt', 'sitemap.xml', 'doctors.js', 'doctors-data.js',
  'hospitals-data.js', 'test-img.html'
];
ROOT_PUBLIC_FILES.forEach(f => {
  app.get('/' + f, (req, res) => {
    res.sendFile(path.join(__dirname, '..', f));
  });
});

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/specialties', require('./routes/specialties'));
app.use('/api/departments', require('./routes/departments'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/stats', require('./routes/stats'));
app.use('/api/users', require('./routes/users'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Omid Hospital API is running',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV
  });
});

// Serve admin panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../admin/index.html'));
});

// Serve booking page
app.get('/booking', (req, res) => {
  res.sendFile(path.join(__dirname, '../booking.html'));
});

// Serve index.html for root and SPA routes
app.get(['/', '/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// 404 handler
app.use(notFound);

// Error handler
app.use(errorHandler);

// Start server after DB is initialized
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

initDatabase().then(() => {
  app.listen(PORT, HOST, () => {
    console.log(`\n🏥 Omid Hospital running on http://${HOST}:${PORT}\n`);
  });
}).catch(err => {
  console.error('❌ Failed to start:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received - shutting down');
  db.close();
  process.exit(0);
});

module.exports = app;
