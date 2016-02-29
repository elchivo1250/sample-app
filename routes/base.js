var express = require('express');
var router = express.Router();
var models = require('../models');
var acl = require('../acl');
var db = require('../models/index');

router.get('/', function (req, res) {
  res.render('index', {
    message: req.flash('message'),
    user: req.user
  });
});

router.get('/survey', acl.isLoggedIn, function (req, res) {
  var query = 'SELECT DISTINCT Questions.id FROM Questions LEFT ' +
    'JOIN Answers ON Answers.QuestionId = Questions.id WHERE ' +
    'Questions.id NOT IN (SELECT Questions.id FROM Questions LEFT ' +
    'JOIN Answers ON Answers.QuestionId = Questions.id LEFT JOIN ' +
    'UserAnswers ON UserAnswers.AnswerId = Answers.id WHERE ' +
    'UserAnswers.UserId = :userId)';

  db.sequelize.query(query, {
    replacements: {
      userId: req.user.id
    },
    type: db.Sequelize.QueryTypes.SELECT
  }).then(function (questions) {
    if (typeof questions === 'undefined' || questions.length === 0) {
      throw new Error('There are no more questions');
    }

    // Get random question first because if you include: [models.Answer] it wants to get the
    // ANSWERS in a random order and limit the potential questions to 1. ._.
    // Please tell me there's a better way to do this.
    models.Question.find({
      where: {
        $or: questions
      },
      order: [
        db.Sequelize.fn('RAND')
      ]
    }).then(function (question) {
      models.Answer.findAll({
        where: {
          QuestionId: question.id
        },
        include: [models.Question]
      }).then(function (answers) {
        res.render('survey', {
          message: req.flash('message'),
          question: answers[0].Question,
          answers: answers,
          user: req.user
        });
      }).catch(function (err) {
        res.render('survey', {
          message: req.flash(err),
          user: req.user
        });
      });
    }).catch(function (err) {
      res.render('survey', {
        message: req.flash(err),
        user: req.user
      });
    });
  }).catch(function (err) {
    res.render('survey', {
      message: req.flash(err),
      user: req.user
    });
  });
});

router.post('/survey/answer', function (req, res) {
  models.UserAnswer.build({
    UserId: req.user.id,
    AnswerId: req.body.answer
  })
  .save()
  .then(function () {
    // do a thing if necessary
  })
  .catch(function () {
    // insert other error handling here
  });
  res.redirect('/survey');
});

module.exports = router;
