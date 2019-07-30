const request = require('superagent');

const getRandomQuote = count => {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => res.body);
};

module.exports = {
  getRandomQuote
};
