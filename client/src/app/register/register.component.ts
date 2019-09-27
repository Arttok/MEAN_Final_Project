import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pageTitle = 'Register';
  user_name: string = '';
  user_password: string = '';
  confirmPass: string = '';
  email: string = '';

  error: boolean = false;
  errMsg: string = '';
  
  // create instance of UserService
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() { }

  onSubmit(): void {
    if (this.user_name == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.email == '') {
      this.errMsg = 'Email Address is required.';
      this.error = true;
    } else if (this.user_password == '') {
      this.errMsg = 'Password is required.';
      this.error = true;
    } else if (this.user_password.length < 8) {
      this.errMsg = 'Password must be at least 8 chars.';
      this.error = true;
    } else if (this.confirmPass == '') {
      this.errMsg = 'Please confirm password.';
      this.error = true;
    } else if (this.user_password != this.confirmPass) {
      this.errMsg = 'Passwords do not match';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

      // Call UserService to Register
      this.authService.register(this.user_name, this.email, this.user_password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Registration unsuccessful.';
          this.error = true;
        } else {
          this.router.navigate(['login']);
        }
      });
    }
  }

  onReset(): void {
    this.user_name = '';
    this.email = '';
    this.user_password = '';
    this.confirmPass = '';

    this.error = false;
    this.errMsg = '';
  }

}