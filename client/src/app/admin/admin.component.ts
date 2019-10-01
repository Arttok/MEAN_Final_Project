import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  //users array
  Users: Array<any> = [];

  constructor(
    private authService: AuthService, 
    private userService: UserService, 
    private router: Router
  ) {}

  ngOnInit() {
    // Check to see if user is Auth to be here
    if(!this.authService.getAdminStatus()) {
      this.router.navigate(['login']);
    }

    // Display info on all users who aren't admin
    this.userService.getAll().subscribe(data => {
      this.Users = data.filter(
        data => data.is_admin === 0);
    });
  }

  // Navigate based on clicked link
  goHere(route: string) : void {
      this.router.navigate([route])
    }
}
