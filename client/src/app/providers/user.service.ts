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

  getUser(): Observable<any> {
    return this.http.get(`${this.usersEndpoint}update/user`, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  deleteUser(id: number): Observable<any> {
    console.log(id);
    console.log(typeof id);
    return this.http.delete(`${this.usersEndpoint}users/` + id, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.usersEndpoint}Users`, this.httpOptions)
    .pipe(map(res => <any[]>res));
  }
}