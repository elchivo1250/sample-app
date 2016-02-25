var express = require('express');
var router = express.Router();

/* GET home page. */
// next removed
router.get('/', function routeHomepage(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
