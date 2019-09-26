var express = require('express');
var router = express.Router();
var fs = require('fs');
var session = require('express-session')

var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session.username)
    if (req.session.username) {
      res.statusCode = 200;
      res.render('leagues', { title: 'Leagues' });
    } else {
      res.redirect('http://localhost:3000/')
    }
  });
  
router.get('/data', function(req, res, next){
  try {
    res.end(fs.readFileSync('./data/leagues.json'));
  } catch (err) {
    res.end('[]');
  }
});

router.get('/teams', function(req, res, next){
  try {
    res.end(fs.readFileSync('./data/teams.json'));
  } catch (err) {
    res.end('[]');
  }
});

router.get('/regions', function(req, res, next){
  try {
    res.end(fs.readFileSync('./data/regions.json'));
  } catch (err) {
    res.end('[]');
  }
});

router.get('/details/teams/:id', function(req, res, next){
  try {
    res.end(fs.readFileSync('./data/teams.json'));
  } catch (err) {
    res.end('[]');
  }
});
  module.exports = router;