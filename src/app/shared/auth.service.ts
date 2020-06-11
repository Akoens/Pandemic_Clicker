import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry,  tap, map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _signupUrl = 'http://localhost:1323/signup'; //'https://api.calenaur.com/signup'; // 
  _loginUrl = 'http://localhost:1323/login'; //https://api.calenaur.com/login';
  _restrictedUrl = 'http://localhost:1323/restricted'; //https://api.calenaur.com/restricted';
  _helloUrl = 'http://localhost:1323/hello';
  _usrUrl = 'http://localhost:1323/usr/';
  _changeUsernameUrl = 'http://localhost:1323/user/changename';
  _changePasswordUrl = 'http://localhost:1323/user/changepassword';

  constructor(private http: HttpClient, private router: Router) { }

  validate(observable:Observable<any>): any{
    observable.subscribe(
      res => {},
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401 || err.status === 403){
            this.router.navigate(['/login']);
          }
        }
        console.log(err)
      }
    );
    return observable;
  }

  getRestricted(){
    return this.validate(this.http.get<any>(this._restrictedUrl));
  }

  changeUsername(user:FormData){
    return this.http.put<any>(this._changeUsernameUrl, user);
  }

  changePassword(user:FormData){
    return this.http.put<any>(this._changePasswordUrl, user);
  }

  signup(user:FormData){
    return this.http.post<any>(this._signupUrl, user).pipe(
      retry(3),
      tap(err => console.log(err))
      );
  }

  login(user:FormData){
    return this.http.post<any>(this._loginUrl, user).pipe(
      retry(3),
      tap(err => console.log(err))
    );
  }

  logout(){
    console.log("logout");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  loggedIn():boolean{
    return !! localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserId(): string{
    return JSON.parse(atob(this.getToken().split('.')[1])).sub;
  }

  getUserData(){ 
    return this.validate(this.http.get(this._usrUrl.concat(this.getUserId())));
  }
}
