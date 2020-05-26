import { Injectable} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SignupService{

  loginForm: FormGroup = this.fb.group({
    username: '',
    password: '',
    confirmpassword: ''
  });
  constructor(private fb: FormBuilder) { 
  }
}
