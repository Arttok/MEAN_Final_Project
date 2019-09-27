import { Component, OnInit } from '@angular/core';
import { RegionService } from './../providers/regions.service';
import { LeagueService } from './../providers/leagues.service';
import { TeamService } from './../providers/teams.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  regions: Array<any> = [];
  leagues: Array<any> = [];
  teams: Array<any> = [];
  selected;
    constructor(
      private regionService: RegionService,
      private leaguesService: LeagueService,
      private teamService: TeamService,
      ) {}

  ngOnInit() {
    this.regionService.getRegion().subscribe(region => {
      console.log("region");
      console.log(region);
      console.log("~~~~~~~~~~~")
      this.regions = region;
    });

    this.leaguesService.getLeague().subscribe(league => {
      console.log("league");
      console.log(league);
      console.log("~~~~~~~~~~~")
      this.leagues = league;
    });

    this.teamService.getTeam().subscribe(teams => {
      console.log("teams");
      console.log(teams);
      console.log("~~~~~~~~~~~")
      this.teams = teams;
    });
  }

}
