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
  showMyContainer: boolean = false;

  regions: Array<any> = [];
  leagues: Array<any> = [];
  teams: Array<any> = [];
  filterTeams: Array<any> = [];
  selected;
    constructor(
      private regionService: RegionService,
      private leaguesService: LeagueService,
      private teamService: TeamService,
      ) {}

  ngOnInit() {
    this.regionService.getRegion().subscribe(region => {
      this.regions = region;
    });

    this.leaguesService.getLeague().subscribe(league => {
      this.leagues = league;
    });

    this.teamService.getTeam().subscribe(teams => {
      console.log("teams");
      console.log(teams)
      console.log(teams[3].Region);
      console.log("~~~~~~~~~~~")
      this.teams = teams;
    });
  }

  onSelect(val: string) {
    if (val == "all")
      {
        console.log(this.teams)
        this.filterTeams = this.teams;
      } else {
        this.filterTeams = this.teams.filter(
        teams => teams.Region === val);
        console.log(val);
      }
    }


  viewAll(): void {
    console.log(this.selected);
  }
}
