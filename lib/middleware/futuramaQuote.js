const { getRandomeQuote } = require('./');

module.exports = (req, res, next) => {
  getRandomeQuote(1)
    .then(quote => {
      req.quote = quote[0];
      next();
    });
};
