const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote');

const profiles = [
  {
    name: 'jon',
    favChar: 'Robot Devil',
    profileQuote: 'Bender is the best!'
  },
];

module.exports = Router()
  .get('/random', futuramaQuote, (req, res) => {
    res.send(req.quote);
  })

  .get('/profiles', (req, res) => {
    res.send(profiles);
  })

  .get('/profiles/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })

  .post('/profiles', futuramaQuote, (req, res) => {

    const {
      name,
      favChar
    } = req.body;

    const profile = {
      name,
      favChar,
      profileQuote: req.quote.quote
    };

    profiles.push(profile);

    res.send(profile);

  });
