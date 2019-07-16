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
  })

  .patch('/profiles/:id', futuramaQuote,  (req, res) => {
    const {
      favChar
    } = req.body;

    const updateProfile = {
      favChar,
      profileQuote: req.quote.quote
    };

    profiles[req.params.id].favChar = updateProfile.favChar;
    profiles[req.params.id].profileQuote = updateProfile.profileQuote;
    res.send(profiles[req.params.id]);
  })

  .patch('/profiles/:id/tagline', futuramaQuote, (req, res) => {
    const updateProfile = {
      profileQuote: req.quote.quote
    };

    profiles[req.params.id].profileQuote = updateProfile.profileQuote;
    res.send(profiles[req.params.id]);
  })

  .delete('/profiles/:id', (req, res) => {
    const deleteProfile = profiles.splice(req.params.id, 1);
    res.send(deleteProfile[0]);
  });
