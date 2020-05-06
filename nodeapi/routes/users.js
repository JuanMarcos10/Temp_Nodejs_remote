var express = require('express');
var router = express.Router();

/* GET users listing. */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users', { userTitle: 'users Page', name: 'Juan Marcos' });
});

module.exports = router;
