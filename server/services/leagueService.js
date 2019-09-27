let fs = require("fs");
var leagueService = {};

leagueService.leagueList = (req, res) => {
  console.log("Working")
  try {
    res.end(fs.readFileSync('./data/leagues.json'));
    } catch (err) {
      console.log('error'+err);
      res.end('[]');
  }
};

leagueService.teamList = (req, res) => {
  console.log("Working")
    try {
      res.end(fs.readFileSync('./data/teams.json'));
      } catch (err) {
        console.log('error'+err);
        res.end('[]');
    }
};

leagueService.regionList = (req, res) => {
  console.log("Working")
  try {
    res.end(fs.readFileSync('./data/regions.json'));
    } catch (err) {
      console.log('error'+err);
      res.end('[]');
  }
};

module.exports = leagueService;