import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  signupForm: FormGroup = this.fb.group({
    username: ['', [
      Validators.required , 
      Validators.minLength(2), 
      Validators.pattern('.*[a-zA-Z0-9]'), 
      Validators.maxLength(16)]],

    password: ['', [
      Validators.required, 
      Validators.minLength(8), 
      Validators.maxLength(64), 
      Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],

    confirmpassword: ['', [
      Validators.required, 
      Validators.minLength(8), 
      Validators.maxLength(64), 
      Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]]
  });

  constructor(private fb: FormBuilder, private router:Router, private authService: AuthService) { 
  }

  ngOnInit(): void {
  }

  submit(){
    let formData: FormData = new FormData(); 
    formData.append('username', this.username.value); 
    formData.append('password', this.password.value); 
    this.authService.signup(formData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    this.router.navigate(['/login']);
    this.signupForm.reset();
  }

  get username() {
    return this.signupForm.get('username');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmpassword() {
    return this.signupForm.get('confirmpassword');
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
      error = 'Password must have a number and a capital letter.'
    }else if(this.password.errors?.maxlength){
      error = 'Password is too long.';
    }
    return error;
  }
}
