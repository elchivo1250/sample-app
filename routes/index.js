var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function routeHomepage(req, res) {
  res.render('index', {
    title: 'Express',
    message: req.flash('message')
  });
});

router.get('/survey', isLoggedIn, function (req, res) {
  res.render('survey', { 
    message: req.flash('message'),
    user: req.user
  });
});

router.post('/login', passport.authenticate('login', {
  successRedirect: '/',
  failureRedirect: '/',
  failureFlash: true
}));

router.get('/register', function (req, res) {
  res.render('register', { 
    message: req.flash('message'),
    user: req.user

  });
});

router.post('register', passport.authenticate('register', {
  successRedirect: '/',
  failureRedirect: '/register',
  failureFlash: true
}));

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }

  res.redirect('/');
}

module.exports = router;
