const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote');

module.exports = Router()
  .get('/random', futuramaQuote, (req, res) => {
    res.send(req.quote);
  });