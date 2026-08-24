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

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS configuration
const corsOrigin = process.env.CORS_ORIGIN;
const corsOptions = {
  origin: corsOrigin ? corsOrigin.split(',').map(s => s.trim()) : (process.env.NODE_ENV === 'production' ? 'https://omid.hospital' : 'http://localhost:5000'),
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Rate limiting
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'درخواست‌های بیش از حد - لطفاً بعداً تلاش کنید' }
});
app.use('/api/', limiter);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Compression
app.use(compression());

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Serve static files - only public directories
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use('/css', express.static(path.join(__dirname, '../css')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/pages', express.static(path.join(__dirname, '../pages')));
app.use('/admin', express.static(path.join(__dirname, '../admin')));

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/specialties', require('./routes/specialties'));
app.use('/api/departments', require('./routes/departments'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/stats', require('./routes/stats'));

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

// Serve SPA-like routes for main pages
app.get(['/', '/index.html', '/doctors', '/specialties', '/departments', '/blog', '/contact', '/about', '/guide'], (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Serve magazine page
app.get('/pages/magazine.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/magazine.html'));
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
