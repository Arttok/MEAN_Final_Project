//Auth TS
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersEndpoint: string = 'http://localhost:3000/users/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials: true
  };
  constructor(private http: HttpClient) {}

  private isAuth: boolean = false; //set auth to false
  private isAdmin: boolean = false; //set admin to false

  //Function to set Auth status
  setAuthStatus(status: boolean) {
    this.isAuth = status;
  }

  //funciton to get current auth status
  getAuthStatus() {
    return this.isAuth;
  }

  //function to set admin status
  setAdminStatus(status: boolean) {
    this.isAdmin = status;
  }

  //function to get Admin status
  getAdminStatus() {
    return this.isAdmin;
  }

  //function for when user is loggin in.
  login(userName: string, password: string) {
      return this.http.post(`${this.usersEndpoint}signin`, {user_name : userName, user_password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  //function for when user is registering.
  register(userName: string, email: string, password: string) {
      return this.http.post(`${this.usersEndpoint}register`, {user_name : userName, user_password : password, email : email, is_admin: 0}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  //function for when user is trying to update their account..
  update(id: number, user_name: string, email: string) {
    return this.http.put(`${this.usersEndpoint}`, {id: id, user_name : user_name, email : email}, this.httpOptions)
    .pipe(map(res => <any[]>res));
}
}