var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fjord_2', { title: 'fjord2' });
});

module.exports = router;