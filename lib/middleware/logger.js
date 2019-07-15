module.exports = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`${req.method} ${req.path}`);
  console.log(req.params);
  req.hasLogged = true;
  next();
};
