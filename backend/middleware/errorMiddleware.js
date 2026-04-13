function notFound(req, res, next) {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
}

function errorHandler(error, req, res, next) {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  res.status(statusCode).json({
    message,
    path: req.originalUrl,
    ...(process.env.NODE_ENV !== "production" ? { stack: error.stack } : {})
  });
}

module.exports = { notFound, errorHandler };
