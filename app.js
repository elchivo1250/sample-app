var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var requiredir = require('require-dir');

var models = require('./models');

var passport = require('passport');
var expressSession = require('express-session');

var express = require('express');

var app = express();

// var routes = require('./routes/index')(app);
var routes = requiredir('./routes'); 

app.use(expressSession({ 
  secret: 'secretKey',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(models.User.createStrategy());

passport.serializeUser(models.User.serializeUser());
passport.deserializeUser(models.User.deserializeUser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

for (var i in routes) {
  app.use('/', routes[i]);
}

app.use(function (req, res, next) {
  res.locals.isLoggedIn = typeof req.user === 'undefined' ? false : true;
  next();
});

// catch 404 and forward to error handler
app.use(function handler404(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  // next removed here
  app.use(function handlerDevStack(err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// next removed here
app.use(function handlerProdStack(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/* Globally available template vars */
app.locals = {
  site: {
    title: 'SurveyChicken',
    description: 'A super-basic survey creation tool whose name I totally didn\'t rip off from SurveyMonkey.'
  },
  author: {
    name: 'Steve Preston',
    email: 'stephen.ward.preston@gmail.com'
  } 
};

module.exports = app;
