import { Injectable} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SignupService{

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required , Validators.minLength(4), Validators.pattern('a-zA-Z')],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { 
  }
}
