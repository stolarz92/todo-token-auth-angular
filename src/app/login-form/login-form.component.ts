import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

interface Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent  {
  credentials: Credentials;

  constructor(private auth: AuthService) {}

  // ngOnInit() {}

  onLogin(credentials) {
    console.log(credentials);
    this.auth.login(credentials);
  }
}
