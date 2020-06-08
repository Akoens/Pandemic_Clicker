import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authService:AuthService;

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private router: Router, private fb: FormBuilder, authService:AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {}

  login(){
    console.log(this.loginForm.valid);
    this.authService.login({name:this.username.value, password:this.password.value})
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('expiresIn', res.expiresIn)
        this.router.navigate(['/'])
    },
      err => console.log(err)
    );
    this.loginForm.reset();
  }

  get username(){
    return this.loginForm.get("username");
  }

  get password(){
    return this.loginForm.get("password");
  }
}
