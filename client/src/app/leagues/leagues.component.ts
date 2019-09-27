import { Component, OnInit } from '@angular/core';
import { RegionService } from './../providers/regions.service';
import { LeagueService } from './../providers/leagues.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  regions: Array<any> = [];
  leagues: Array<any> = [];
  selected;
    constructor(
      private regionService: RegionService,
      private leaguesService: LeagueService,
      ) {}

  ngOnInit() {
    this.regionService.getRegion().subscribe(data => {
      console.log("data");
      console.log(data[0].Name);
      console.log("~~~~~~~~~~~")
      this.regions = data;
    });

    this.leaguesService.getLeague().subscribe(data => {
      console.log("data");
      console.log(data);
      console.log("~~~~~~~~~~~")
      this.regions = data;
    });
  }

}
