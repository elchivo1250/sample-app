var express = require('express');
var router = express.Router();

/* GET users listing. */
// removed next
router.get('/', function routeGetUsers(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
