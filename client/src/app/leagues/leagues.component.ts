//Leagues TS Page
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
  regions: Array<any> = []; //array for regions
  leagues: Array<any> = []; //arrays for leagues
  teams: Array<any> = []; //array for teams
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

    //get all regions
    this.regionService.getRegion().subscribe(region => {
      this.regions = region;
    });

    //get all leagues
    this.leaguesService.getLeague().subscribe(league => {
      this.leagues = league;
    });

    //get all get all teams
    this.teamService.getTeam().subscribe(teams => {
      this.teams = teams;
      this.filterTeams = this.teams; //assign the teams on the page to all
    });

    //If user isn't authenticated sent them to login.
    if(!this.authService.getAuthStatus()) {
      this.router.navigate(['login']);
    }
  }

  //Filter leagues based upon dropdown.
  //Filtered teams use the Team array so that the teams array only has to be called one time.
  onSelect($event, val: string) {
    let text = $event.target.options[$event.target.options.selectedIndex].text;
    console.log(text)
    if (val == "all") //if all is selected show all teams.
      {
        this.filterTeams = this.teams;
      } else if (val == "Male") { //if Male is selected, show male only teams.
        this.filterTeams = this.teams.filter(
        teams => teams.TeamGender === val);
      } else if (val == "Female") { //if Female is selected, show Female only teams.
        this.filterTeams = this.teams.filter(
        teams => teams.TeamGender === val);
      } else if (val == "Region") { //if a region is selected.
        if (text == "European") { //if region is Europeans set the value to EU
          val = "EU"
        } else {
          val = "NA" //if the region is North America, set it to NA
        }
        this.filterTeams = this.teams.filter(  //Filter teams based upon region.
        teams => teams.Region === val);
      } else if (val == "League") { //if dropdown with value of leagues is selected.
        let codes;
        for (let i=0; i < this.leagues.length; i++) 
        {
          if (text == this.leagues[i].Name) //Set the league code based upon name selected.
          {
            codes = this.leagues[i].Code;
            break;
          }
        }
        this.filterTeams = this.teams.filter( //filtered teams based upon league.
        teams => teams.League === codes);
      }
    }
}
