//User TS
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersEndpoint: string = 'http://localhost:3000/';
	private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    withCredentials: true
  };

  id: number;

  constructor(private http: HttpClient) {}

  //function to get a users info.
  getUser(): Observable<any> {
    return this.http.get(`${this.usersEndpoint}update/user`, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  //function to delete a user. It uses the ID of the account to find which user to delete.
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.usersEndpoint}users/` + id, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  //function to get all users info.
  getAll(): Observable<any> {
    return this.http.get(`${this.usersEndpoint}Users`, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }
}