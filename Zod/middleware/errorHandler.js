export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    meessge: err.message || "something is wrong",
    status,
  });
};
