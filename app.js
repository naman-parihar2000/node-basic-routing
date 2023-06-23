const express = require('express');
const app = express();

app.use(express.json());

const tourRouter = require('./routes/toursRoute');
const userRouter = require('./routes/usersRouter');

app.use('/tours', tourRouter);
app.use('/users', userRouter);

module.exports = app;
