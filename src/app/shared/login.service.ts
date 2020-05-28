import { Injectable} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { 

  }

}
