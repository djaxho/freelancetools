var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreelanceTools.io | Tools to make the freelancers life easier' });
});

module.exports = router;
