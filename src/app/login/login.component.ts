import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder) {
   }

  ngOnInit(): void {}

  login(){
    console.log(this.loginForm.valid);
    this.router.navigate(['/'])
    this.loginForm.reset();
  }

  get username(){
    return this.loginForm.get("username");
  }

  get password(){
    return this.loginForm.get("password");
  }
}
