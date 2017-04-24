import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  constructor(private http: Http, private router: Router) {}

  register(credentials) {
    return this.http.post('http://localhost:3000/signup', credentials)
      .toPromise()
      .then(response => response.json() as String[])
      .catch(this.handleError);
  }
  login(credentials) {
   return this.http.post('http://localhost:3000/auth/login', credentials)
      .toPromise()
      .then(response => response.json() as String[])
      .catch(this.handleError);
  }
  loggedIn() {
    console.log(tokenNotExpired('id_token'));
    return tokenNotExpired('id_token');
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  logOut() {
    localStorage.removeItem('id_token');
    this.router.navigate(['/']);
  }
}
