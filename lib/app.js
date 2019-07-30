const express = require('express');
const logger = require('./middleware/logger');
const futuramaRoutes = require('./routes/futurama');
const notFound = require('../lib/middleware/notFound');
const errPath = require('../lib/middleware/errPath');

const app = express();

app.use(logger);
app.use(express.json());

app.use(futuramaRoutes);

// app.use((req, res, next) => {
//   const err = new Error('Not Found dorkus');
//   err.status = 404;
//   next(err);
// });

// // eslint-disable-next-line no-unused-vars
// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   res.status(status);
//   res.send({ error: err, message: err.message });
// });

app.use(notFound);

app.use(errPath);

module.exports = app;
