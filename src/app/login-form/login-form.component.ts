import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

interface Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent {
  @Output() onFormResult: EventEmitter<any> = new EventEmitter();

  credentials: Credentials;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(email: string, password: string) {
    var newCredentials: Credentials = {email: email, password: password};
    console.log(newCredentials);
    this.auth.login(newCredentials).then(resp => {
      localStorage.setItem('id_token', resp['auth_token']);
      this.router.navigate(['/todos']);
    });
    this.onFormResult.emit({signedIn: true});
  }

}
