var express = require('express');
var passport = require('passport');
var router = express.Router();
var models = require('../models');

router.get('/login', function (req, res) {
  res.render('login', {
    message: req.flash('message')
  });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
  res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


router.get('/register', function (req, res) {
  res.render('register', { 
    message: req.flash('message'),
    user: req.user
  });
});

router.post('/register', function (req, res, next) {
  models.User.register(req.body['username'], req.body['password'], function (err, registeredUser) {

    registeredUser.role = 'user';
    registeredUser.save(); 

    if (err) {
      console.log(err.class);
      return res.render('register', {
        message: req.flash('message')
      });
    }

    passport.authenticate('local') (req, res, function () {
      res.redirect('/');
    });

  });
});

module.exports = router;
