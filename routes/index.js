var express = require('express'); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
res.render('index', { title: 'Travel Page' });
});

router.get('/Paris', function(req, res, next) {
   res.render('Paris', { title: 'Bienvenue A Paris!' });
});

router.get('/Berlin', function(req, res, next) { 
  res.render('Berlin', { title: 'Welcome to Berlin!' });
});

router.get('/London', function(req, res, next) { 
  res.render('London', { title: 'Here is London!' });
});


module.exports = router;