import { Component, OnInit } from '@angular/core';
import { SignupService } from '../shared/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupService:SignupService;

  constructor(signupService:SignupService) {
    this.signupService = signupService;
   }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.signupService.loginForm.value);
  }

}
