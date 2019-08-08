var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var  = express();

// view engine setup
.set('views', path.join(__dirname, 'views'));
.set('view engine', 'ejs');

.use(logger('dev'));
.use(express.json());
.use(express.urlencoded({ extended: false }));
.use(cookieParser());
.use(express.static(path.join(__dirname, 'public')));

.use('/', indexRouter);
.use('/users', usersRouter);

// catch 404 and forward to error handler
.use(function(req, res, next) {
  next(createError(404));
});

//adding static functionality for images
app.use(express.static('public'));

// error handler
.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req..get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = ;
