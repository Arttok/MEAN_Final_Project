import { Component, OnInit } from '@angular/core';
import { RegionService } from './../providers/regions.service';
import { LeagueService } from './../providers/leagues.service';
import { TeamService } from './../providers/teams.service';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  showMyContainer: boolean = false;

  Selector: string = "";
  regions: Array<any> = [];
  leagues: Array<any> = [];
  teams: Array<any> = [];
  filterTeams: Array<any> = [];
  selected;
    constructor(
      private regionService: RegionService,
      private leaguesService: LeagueService,
      private teamService: TeamService,
      private authService: AuthService,
      private router: Router
      ) {}

  ngOnInit() {

    this.regionService.getRegion().subscribe(region => {
      this.regions = region;
    });

    this.leaguesService.getLeague().subscribe(league => {
      this.leagues = league;
    });

    this.teamService.getTeam().subscribe(teams => {
      this.teams = teams;
      this.filterTeams = this.teams;
    });

    if(!this.authService.getAuthStatus()) {
      this.router.navigate(['login']);
    }
  }

  onSelect($event, val: string) {
    let text = $event.target.options[$event.target.options.selectedIndex].text;
    console.log(text)
    if (val == "all")
      {
        this.filterTeams = this.teams;
      } else if (val == "Male") {
        this.filterTeams = this.teams.filter(
        teams => teams.TeamGender === val);
      } else if (val == "Female") {
        this.filterTeams = this.teams.filter(
        teams => teams.TeamGender === val);
      } else if (val == "Region") {
        if (text == "European") {
          val = "EU"
        } else {
          val = "NA"
        }
        this.filterTeams = this.teams.filter(
        teams => teams.Region === val);
      } else if (val == "League") {
        let codes;
        for (let i=0; i < this.leagues.length; i++)
        {
          if (text == this.leagues[i].Name)
          {
            codes = this.leagues[i].Code;
            break;
          }
        }
        this.filterTeams = this.teams.filter(
        teams => teams.League === codes);
      }
    }


  viewAll(): void {
    console.log(this.selected);
  }
}
