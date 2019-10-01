//Edit TS Page

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
  confirm_pass: string;
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
    //Get User information and display it on the page.
    this.userService.getUser().subscribe(data => {
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

  //When the user clicks the Update button.
  onSubmit(): void {
    if (this.user_name == '') { //make sure user name isn't blank.
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.confirm_pass == '') { //make sure confirm pass isn't blank.
      this.errMsg = "Please Confirm your password. It can't be left blank.";
      this.error = true;
    } else if (this.email == '') { //make sure email isn't blank.
      this.errMsg = 'Email is required.';
      this.error = true;
    } else if (this.confirm_pass != '' && this.user_password != this.confirm_pass) {
      //make sure username and password match.
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
          this.confirm_pass = '';
          this.router.navigate(['edit']);
        }
      })
    }
  }

  //When the user clicks on the delete button.
  onDelete(): void {
    if (this.confirm_pass != '' && this.user_password != this.confirm_pass) {
      //make sure username and password match.
      this.errMsg = 'Your confirmation password is incorrect.';
      this.error = true;
    } else if (this.confirm_pass == '') {
      this.errMsg = 'You need to confirm your password to delete your account.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

    //Deletes the user and sends them back to the home page.
    this.userService.deleteUser(this.id).subscribe(data => {
        this.authService.setAuthStatus(false); //Sets the user auth as false.
        this.authService.setAdminStatus(false); //sets the user admin as false.
        this.router.navigate(['']); //sends the user back to the home page.
      })
    }
  }

}