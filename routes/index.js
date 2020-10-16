var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/project', function(req, res, next) {
  res.render('project', {});
});

router.get('/action', function(req, res, next) {
  res.render('action', {});
});

router.get('/blog', function(req, res, next) {
  res.render('blog', {});
});

module.exports = router;