// require new custom Service Module
var leagueService = require('../services/leagueService');

var leagueController = {};

leagueController.getLeagues = (req, res) => {
    console.log("getLeagues");
    leagueService.leagueList (req, res).
    then((leagues) => {
        console.log('leagues data' + leagues);
            res.json(leagues);
    });
}

leagueController.getTeams = (req, res) => {
    console.log("getTeams");
    leagueService.teamList (req, res).
    then((teams) => {
        console.log('teams data' + teams);
            res.json(teams);
        });
}

leagueController.getRegions = (req, res) => {
    console.log("getRegions");
    leagueService.regionList (req, res).
    then((region) => {
        console.log('region data' + region);
            res.json(region);
    });
}
module.exports = leagueController;
