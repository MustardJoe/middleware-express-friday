const app = require('./lib/app');

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`SkyNet is up and running on ${PORT}. Your robot overloards are coming...`);
});
