var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Variables globales de vistas
 */
app.locals.title = 'Express';

/** 
 * Web app routes
 */
app.use('/', require('./routes/index'));
app.use('/home', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/other', express.static(path.join(__dirname, 'other')));
/**
 * All methods can be launched in /secret folder
 */
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
  },
  function (req, res) {
    res.send('Hello from secret folder...');
});

/**
 * First download method
 */
app.get('/download-example', function (req, res) {
res.download('./public/images/experiencia.jpg')  
});

// BASIC METHODS
/**
 * Get Method
 */
app.get('/hello', function (req, res) {
  res.send('Hello You! - This is just an answer from app.js file');
});

/**
 * Post Basic Method
 */
app.post('/user', function (req, res) {
  res.send('Got a POST request');
});

/**
 * Put Method
 */
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

/**
 * Delete Basic Method
 */
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that! <br> Please enter a valid web page in the browser.');
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
