var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const bootstrap = require('bootstrap');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fjord_1Router = require('./routes/fjord_1');
var fjord_2Router = require('./routes/fjord_2');
var fjord_4Router = require('./routes/fjord_4');

var app = express();

app.listen(3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fjord_1', fjord_1Router);
app.use('/fjord_2', fjord_2Router);
app.use('/fjord_4', fjord_4Router);
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));
// app.use('/css', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/css')))
// app.use('/js', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/js')))
// app.use('/js', express.static(path.join(_dirname, 'node_modules/jquery/dist')))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
