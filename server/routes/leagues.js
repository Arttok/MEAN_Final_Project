var express = require('express');
var leaguesRouter  = express.Router();
const api = require('../controllers/leagues');

// GET http://localhost:3000/leagues/leagues
leaguesRouter.get('/leagues', api.getLeagues);

// GET http://localhost:3000/leagues/teams
leaguesRouter.get('/teams', api.getTeams);

// GET http://localhost:3000/leagues/regions
leaguesRouter.get('/regions', api.getRegions);

module.exports = leaguesRouter ;