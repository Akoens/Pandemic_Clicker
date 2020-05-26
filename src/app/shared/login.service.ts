import { Injectable} from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  loginForm: FormGroup = this.fb.group({
    username: '',
    password: ''
  });
  constructor(private fb: FormBuilder) { 

  }

}
