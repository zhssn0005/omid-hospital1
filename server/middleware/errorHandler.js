// Global error handler
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Default error
  let error = {
    success: false,
    message: err.message || 'خطای سرور',
    statusCode: err.statusCode || 500
  };

  // SQLite errors
  if (err.code === 'SQLITE_CONSTRAINT') {
    error.statusCode = 400;
    if (err.message.includes('UNIQUE')) {
      error.message = 'این اطلاعات قبلاً ثبت شده است';
    } else {
      error.message = 'خطای محدودیت دیتابیس';
    }
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    error.statusCode = 401;
    error.message = 'توکن نامعتبر است';
  }

  if (err.name === 'TokenExpiredError') {
    error.statusCode = 401;
    error.message = 'توکن منقضی شده است';
  }

  // Validation errors
  if (err.name === 'ValidationError') {
    error.statusCode = 400;
    error.message = err.message;
  }

  // Multer errors (file upload)
  if (err.name === 'MulterError') {
    error.statusCode = 400;
    if (err.code === 'LIMIT_FILE_SIZE') {
      error.message = 'حجم فایل بیش از حد مجاز است';
    } else {
      error.message = 'خطا در آپلود فایل';
    }
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

// 404 handler
const notFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: 'آدرس مورد نظر یافت نشد'
  });
};

module.exports = { errorHandler, notFound };
