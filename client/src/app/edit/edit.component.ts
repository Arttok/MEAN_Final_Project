import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user.service';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  user_name: string;
  email: string;
  confirm_pass: string = "";
  user_password: string;
  is_admin: number;

  error: boolean = false;
  errMsg: string = '';

  userInfo: Array<any> = [];
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      console.log(data);
      this.id = data[0];
      this.user_name = data[1];
      this.user_password = data[2];
      this.email = data[3];

      //makes sure that the user is Auth.
      if(!this.authService.getAuthStatus()) {
        this.router.navigate(['login']);
      }
    });
  }

  onSubmit(): void {
    if (this.user_name == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.confirm_pass == '') {
      console.log(this.confirm_pass)
      console.log(this.user_password)
      this.errMsg = "Please Confirm your password. It can't be left blank.";
      this.error = true;
    } else if (this.email == '') {
      this.errMsg = 'Email is required.';
      this.error = true;
    } else if (this.confirm_pass != '' && this.user_password != this.confirm_pass) {
      console.log(this.confirm_pass)
      console.log(this.user_password)
      this.errMsg = 'Confirmed Password is not correct.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';
      // Call AuthService to authenticate      
      this.authService.update(this.id, this.user_name, this.email).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Login unsuccessful.';
          this.error = true;
        } else {
          console.log("working")
          this.confirm_pass = '';
          this.router.navigate(['edit']);
        }
      })
    }
  }

  onDelete(): void {
    if (this.confirm_pass != '' && this.user_password != this.confirm_pass) {
      this.errMsg = 'Your confirmation password is incorrect.';
      this.error = true;
    } else if (this.confirm_pass == '') {
      this.errMsg = 'You need to confirm your password to delete your account.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

    this.userService.deleteUser(this.id).subscribe(data => {
        this.authService.setAuthStatus(false);
        this.authService.setAdminStatus(false);
        this.router.navigate(['']);
      })
    }
  }

}