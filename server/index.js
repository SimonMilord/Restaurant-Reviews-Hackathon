var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/route');

var app = express();
// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(8000, (req, res, next) => {
  console.log('listening on port 8000');
});

module.exports = app;
