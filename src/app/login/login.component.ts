import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginService:LoginService;

  constructor(loginServive:LoginService) {
    this.loginService = loginServive;
   }

  ngOnInit(): void {}

  login(){
    console.log(this.loginService.loginForm.value);
    this.loginService.loginForm.reset();
  }
}
