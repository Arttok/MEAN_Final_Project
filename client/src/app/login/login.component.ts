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

  onSubmit(): void {
    if (this.userName == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.password == '') {
      this.errMsg = 'Password is required.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

       // Call AuthService to authenticate
       this.authService.login(this.userName, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Login unsuccessful.';
          this.error = true;
          this.authService.setAuthStatus(false);
        } else {
          if(data['is_admin'] == 1)
          {
            console.log("Correct")
            this.authService.setAdminStatus(true);
          }
          this.authService.setAuthStatus(true);
          this.router.navigate(['']);
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
