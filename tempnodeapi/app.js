var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  // sirve ficheros estaticos

app.use('/', indexRouter);
app.use('/users', usersRouter);

/**
 *  Conexion a la base de datos
 */
require('./lib/connectMongoose');
require('./models/Agente');

/**
 * Variables globales de vistas
 */
app.locals.titulo = 'tempnodeapi';
/**
 * Rutas de nuestro API
 */
app.use('/apiv1/agentes', require('./routes/apiv1/agentes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // errores de validación
  if (err.array) {
    err.status = 422;
    const errInfo = err.array({onlyFirstError: true}) [0];
    
    err.message = isAPIRequest(req) ? 
    { message: 'Not valid', errors: err.mapped()} : `Not valid - ${errInfo.param} ${errInfo.msg}`;
  }

  // render the error page
  res.status(err.status || 500);

// si es una peticion de API respondo con JSON
  if (isAPIRequest(req)) {
    res.json({ success: false, error: err.message });
    return;
  }
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.render('error');

});

function isAPIRequest(req) {
  return req.originalUrl.indexOf('/apiv1') === 0;
}

module.exports = app;
