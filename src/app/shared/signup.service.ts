import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry,  tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signup(username: string, password: String){
    return this.http.post('https://api.calenaur.com/signup', {username: username, password: password}).pipe(
      retry(3),
      tap(err => console.log(err))
      );
  }

  signupLocal(username: string, password: String){
    return this.http.post('http://localhost:1323/signup', {username: username, password: password});
  }
}
