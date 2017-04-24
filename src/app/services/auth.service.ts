import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  login(credentials) {
   return this.http.post('http://localhost:3000/auth/login', credentials)
      .toPromise()
      .then(response => response.json() as String[])
      .catch(this.handleError);
  }
  loggedIn() {
    return tokenNotExpired();
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
