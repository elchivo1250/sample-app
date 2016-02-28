var express = require('express');
var passport = require('passport');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
  typeof(user) === 'undefined'
  res.render('index', {
    message: req.flash('message'),
    user: req.user,
    isLoggedIn: req.user ? true : false
  });
});

router.get('/survey', passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'You must be logged in to view this page' 
}), function (req, res) {
  res.render('survey', { 
    message: req.flash('message'),
    user: req.user
  });
});

module.exports = router;
