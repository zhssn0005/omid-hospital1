const jwt = require('jsonwebtoken');
const { db } = require('../config/database');

// Verify JWT token
const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'دسترسی غیرمجاز - توکن ارسال نشده است' 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Get user from database
    const user = db.prepare('SELECT id, username, email, full_name, phone, role, avatar, is_active FROM users WHERE id = ?')
      .get(decoded.id);

    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'کاربر یافت نشد' 
      });
    }

    if (!user.is_active) {
      return res.status(401).json({ 
        success: false, 
        message: 'حساب کاربری غیرفعال است' 
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({ 
      success: false, 
      message: 'توکن نامعتبر یا منقضی شده است' 
    });
  }
};

// Check if user has required role
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ 
        success: false, 
        message: 'دسترسی غیرمجاز' 
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false, 
        message: 'شما دسترسی به این بخش را ندارید' 
      });
    }

    next();
  };
};

// Optional authentication (doesn't fail if no token)
const optionalAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = db.prepare('SELECT id, username, email, full_name, phone, role, avatar FROM users WHERE id = ? AND is_active = 1')
        .get(decoded.id);
      
      if (user) {
        req.user = user;
      }
    }
  } catch (error) {
    // Silent fail for optional auth
  }
  
  next();
};

module.exports = { authenticate, authorize, optionalAuth };
