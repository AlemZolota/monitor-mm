import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  pwd;
  hide = true;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const loginValid = this.loginService.checkRegistration(this.user, this.pwd);
    if (loginValid) {
      this.router.navigate(['/event-log-table'], { skipLocationChange: true });
    } else {
      // TODO display message to user
      console.log('Credentials are not valid!');
    }
  }

}
