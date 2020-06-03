import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { SignupService } from '../shared/signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent{

   loginForm: FormGroup = this.fb.group({
    username: ['', [
      Validators.required , 
      Validators.minLength(2), 
      Validators.pattern('.*[a-zA-Z0-9]'), 
      Validators.maxLength(16)]],

    password: ['', [
      Validators.required, 
      Validators.minLength(8), 
      Validators.maxLength(64), 
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],

    confirmpassword: ['', [
      Validators.required, 
      Validators.minLength(8), 
      Validators.maxLength(64), 
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]]
  });

  constructor(private fb: FormBuilder, private router:Router, private signupService: SignupService) { 
  }

  submit(){
    console.log(this.loginForm.value);
    this.signupService.signup(this.username.value, this.password.value);
    this.router.navigate(['/'])
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get confirmpassword() {
    return this.loginForm.get('confirmpassword');
  }

  get signupUsernameError(){
    let error = '';

    if(this.username.errors?.required){
      error = 'Please enter a name.';
    }else if(this.username.errors?.minlength){
      error = 'Name is too short.';
    }else if(this.username.errors?.maxlength){
      error = 'Name is too long.';
    }
    return error;
  }

  get signupPasswordError(){
    let error = '';

    if(this.password.errors?.required){
      error = 'Please enter a password.';
    }else if(this.password.errors?.minlength){
      error = 'Password is too short.';
    }else if(this.password.errors?.pattern){
      error = 'Password must have a number.'
    }else if(this.password.errors?.maxlength){
      error = 'Password is too long.';
    }
    return error;
  }
}
