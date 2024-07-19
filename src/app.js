const express = require('express');
const app = express();
const router = require('./router');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(errorMiddleware);
module.exports = app;