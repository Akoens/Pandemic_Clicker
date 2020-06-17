import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DeleteWarningComponent } from 'src/app/layout/dialog/delete-warning/delete-warning.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'user-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  
  authService:AuthService;
  deleteWarning:MatDialog;

  changeUsernameForm: FormGroup = this.fb.group({
    username: ['', [
      Validators.required,
      Validators.minLength(2), 
      Validators.pattern('.*[a-zA-Z0-9]'), 
      Validators.maxLength(16)]],
  });

  changePasswordForm: FormGroup = this.fb.group({
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

  constructor(private fb: FormBuilder, authService:AuthService, dialog: MatDialog) {
    this.authService = authService;
    this.deleteWarning = dialog;
  }

  ngOnInit(): void {
  }

  changeUsername(){
    let formData: FormData = new FormData(); 
    formData.append('newname', this.username.value); 
    this.authService.changeUsername(formData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    this.changeUsernameForm.reset();
  }

  changePassword(){
    let formData: FormData = new FormData(); 
    formData.append('newpassword', this.password.value); 
    this.authService.changePassword(formData).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    this.changePasswordForm.reset();
  }

  openWarning(){
    let waringResult = this.deleteWarning.open(DeleteWarningComponent);

    waringResult.afterClosed().subscribe(
      res => {
        if(res){
          this.authService.deleteAccount();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  get username() {
    return this.changeUsernameForm.get('username');
  }

  get password() {
    return this.changePasswordForm.get('password');
  }

  get confirmpassword() {
    return this.changePasswordForm.get('confirmpassword');
  }

  get changeUsernameError(){
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

  get changePasswordError(){
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
