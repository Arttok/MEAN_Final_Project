//Register TS Page
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

  //When the user clicks the submit button. 
  onSubmit(): void {
    if (this.user_name == '') { //makes sure the user name is not blank.
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.email == '') { //makes sure the email is not blank.
      this.errMsg = 'Email Address is required.';
      this.error = true;
    } else if (this.user_password == '') { //makes sure the password is not blank.
      this.errMsg = 'Password is required.';
      this.error = true;
    } else if (this.user_password.length < 8) { //makes sure the password is at least 8 characters.
      this.errMsg = 'Password must be at least 8 chars.';
      this.error = true;
    } else if (this.confirmPass == '') { //makes sure the confirm password is not blank.
      this.errMsg = 'Please confirm password.';
      this.error = true;
    } else if (this.user_password != this.confirmPass) { //makes sure the confirm password is the same as the password.
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
          this.router.navigate(['login']); //sends the user to login once they finish registering.
        }
      });
    }
  }

  //on reset set all input fields to blank.
  onReset(): void {
    this.user_name = '';
    this.email = '';
    this.user_password = '';
    this.confirmPass = '';

    this.error = false;
    this.errMsg = '';
  }

}