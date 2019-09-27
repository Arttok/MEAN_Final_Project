import { Component, OnInit } from '@angular/core';

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
    }
  }

  onReset(): void {
    this.userName = '';
    this.password = '';

    this.error = false;
    this.errMsg = '';
  }
}
