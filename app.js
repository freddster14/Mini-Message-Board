const express = require('express');
const path = require('node:path');
const { indexRouter } = require('./routes');

const app = express();
const assestsPath = path.join(__dirname, 'public');
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assestsPath));
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

app.listen(PORT);
