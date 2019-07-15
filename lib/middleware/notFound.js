module.exports = (req, res, next) => {
  const err = new Error('404, File Not Found doofus');
  err.status = 404;
  next(err);
};
