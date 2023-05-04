const ErrorHandle = require('../utils/errorHandle');

module.exports = (err, req, res, next) => {
  err.code = err.status || 500;
  err.message = err.message || 'Internal Server Error';

  if (err.name === 'CaseError') {
    const message = 'Resource not found invalid' + err.path;
    err = new ErrorHandle(message, 404);
  }

  if (err.code === 11000) {
    const message = 'email is already';
    err = new ErrorHandle(message, 400);
  }

  if (err.name === 'jsonWebTokenError') {
    const message = 'jwt is invalid';
    err = new ErrorHandle(message, 400);
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'jwt token expired';
    err = new ErrorHandle(message, 400);
  }

  res.status(err.code).json({
    message: err.message,
    code: err.code,
    success: false,
  });
};