import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
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

  login(userName: string, password: string) {
      return this.http.post(`${this.usersEndpoint}signin`, {user_name : userName, user_password : password}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  register(userName: string, email: string, password: string) {
      return this.http.post(`${this.usersEndpoint}register`, {user_name : userName, user_password : password, email : email, is_admin: 0}, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  update(id: number, user_name: string, email: string) {
    return this.http.put(`${this.usersEndpoint}`, {id: id, user_name : user_name, email : email}, this.httpOptions)
    .pipe(map(res => <any[]>res));
}
}