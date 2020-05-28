import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginService:LoginService;

  constructor(loginServive:LoginService, private router: Router) {
    this.loginService = loginServive;
   }

  ngOnInit(): void {}

  login(){
    console.log(this.loginService.loginForm.valid);
    this.router.navigate(['/'])
    this.loginService.loginForm.reset();

  }
}
