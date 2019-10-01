//LOGIN TS Page
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Login';
  userName: string = '';
  password: string = '';

  error: boolean = false;
  errMsg: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router) {}

  ngOnInit() {}
  
  //When the user clicks on login.
  onSubmit(): void {
    if (this.userName == '') { //make sure username isn't blank.
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.password == '') { //make sure password isn't blank.
      this.errMsg = 'Password is required.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

       // Call AuthService to authenticate
       this.authService.login(this.userName, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Login unsuccessful. Username or Password is incorrect.';
          this.error = true;
          this.authService.setAuthStatus(false); //if user is able to login, auth is true.
        } else {
          if(data['is_admin'] == 1)
          {
            this.authService.setAdminStatus(true); //if user is Admin set status true.
          }
          this.authService.setAuthStatus(true);
          this.router.navigate(['leagues']); //send user to home.
        }
      })
    }
  }

  onReset(): void {
    this.userName = '';
    this.password = '';

    this.error = false;
    this.errMsg = '';
  }
}
