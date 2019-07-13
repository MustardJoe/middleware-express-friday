module.exports = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`${req.method} ${req.path}`);
  req.hasLogged = true;
  next();
};
