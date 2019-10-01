//This is the NAV TS
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../providers/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  // Grab auth status for links
  getAuth(): boolean {
    return this.authService.getAuthStatus();
  }
  // Grab admin status for link
  getAdmin(): boolean {
    return this.authService.getAdminStatus();
  }

  // Navigate based on clicked link
  goHere(route: string) : void {
    if (route == "logout") //if the user clicks on logout.
    {
      this.authService.setAuthStatus(false); //Set Auth to false
      this.authService.setAdminStatus(false); //Set Amdin to false
      this.router.navigate([""]); //Send user to home page.
    } else {
      this.router.navigate([route]);
    }
  }
}
