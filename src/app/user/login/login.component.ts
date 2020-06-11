import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'user-login',
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
    let formData: FormData = new FormData(); 
    formData.append('username', this.username.value); 
    formData.append('password', this.password.value);
    this.authService.login(formData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/'])
    });
    this.loginForm.reset();
  }

  get username(){
    return this.loginForm.get("username");
  }

  get password(){
    return this.loginForm.get("password");
  }
}
