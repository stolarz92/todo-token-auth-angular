import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

interface Credentials {
  email: string;
  name: string;
  password: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {
  @Output() onFormResult:EventEmitter<any> = new EventEmitter<any>();

  credentials: Credentials;

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {}

  onSignUpSubmit(email: string, name: string, password: string) {
    var newCredentials: Credentials = { email: email, name: name, password: password };
    console.log(newCredentials);
    this.auth.register(newCredentials).then(resp => {
      console.log('registered');
      this.router.navigate(['/']);
    });
    this.onFormResult.emit({signedUp: true});
    // this.authService.registerUser(this.signUpUser).subscribe(
    //   (res) => {
    //     if (res.status === 200) {
    //       this.onFormResult.emit({signedUp: true, res});
    //     }
    //   },
    //
    //   (err) => {
    //     console.log(err.json());
    //     this.onFormResult.emit({signedUp: false, err});
    //   }
    // );
  }
}
