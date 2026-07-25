require('dotenv').config();
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
  origin: corsOrigin ? corsOrigin.split(',') : true,
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Compression
app.use(compression());

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, '../')));

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

// Serve main site (catch-all)
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  const indexPath = path.join(__dirname, '../index.html');
  const fs = require('fs');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    next();
  }
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
    console.log(`
╔══════════════════════════════════════════════╗
║   🏥 Omid Hospital Management System        ║
║                                              ║
║   Running on: http://${HOST}:${PORT}          ║
║   Admin Panel: http://${HOST}:${PORT}/admin   ║
║   API Health:  http://${HOST}:${PORT}/api/health ║
╚══════════════════════════════════════════════╝
    `);
  });
}).catch(err => {
  console.error('❌ Failed to initialize database:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received - shutting down');
  db.close();
  process.exit(0);
});

module.exports = app;
