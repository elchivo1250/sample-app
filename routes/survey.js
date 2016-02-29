var express = require('express');
var router = express.Router();
var models = require('../models');
var db = require('../models/index');

router.get('/admin/survey/manage', function (req, res) {
  models.Question.findAll({
    include: [models.Answer]
  }).then(function (questions) {
    res.render('admin-survey-manage', {
      message: req.flash('message'),
      questions: questions,
      user: req.user
    });
  });
});

router.get('/admin/survey/view', function (req, res) {
  models.UserAnswer.findAll({
    attributes: [[db.Sequelize.fn('COUNT', '*'), 'answerCount']],
    include: [{
      model: models.Answer,
      include: [models.Question]
    }],
    group: ['AnswerId'],
    order: [['AnswerId', 'ASC']]
  }).then(function (answerData) {
    res.render('admin-survey-results', {
      message: req.flash('message'),
      answerData: answerData,
      user: req.user
    });
  });
});

router.post('/admin/question/create', function (req, res) {
  models.Question.build({
    text: req.body.text
  })
  .save()
  .then(function () {
    console.log('success');
  })
  .catch(function (err) {
    console.log('error:' + err);
  });
  res.redirect('/admin/survey/manage');
});

router.post('/admin/question/:question_id/answer/create', function (req, res) {
  models.Answer.build({
    text: req.body.text,
    QuestionId: req.params.question_id
  })
  .save()
  .then(function () {
    console.log('success');
  })
  .catch(function (err) {
    console.log('error:' + err);
  });
  res.redirect('/admin/survey/manage');
});

module.exports = router;
