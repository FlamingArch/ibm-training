export default function errorHandler(error, _, res, next) {
  const statusCode = res.statusCode < 400 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: error.message,
    stack: error.stack,
  });
}
