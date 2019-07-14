const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote');

const profiles = [
  {
    name: 'jon',
    favChar: 'Robot Devil'
  },
];

module.exports = Router()
  .get('/random', futuramaQuote, (req, res) => {
    res.send(req.quote);
  })

  .get('/profiles', (req, res) => {
    res.send(profiles);
  })

  .post('/profiles', (req, res) => {

    const {
      name,
      favChar
    } = req.body;

    const profile = {
      name,
      favChar
    };

    profiles.push(profile);


    // res.send(profile);
    res.send(profile);

  });
