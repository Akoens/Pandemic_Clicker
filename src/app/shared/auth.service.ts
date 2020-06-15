import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // _signupUrl = 'https://api.calenaur.com/signup';
  // _loginUrl = 'https://api.calenaur.com/login';
  // _restrictedUrl = 'https://api.calenaur.com/restricted';
  // _helloUrl = 'https://api.calenaur.com/hello';
  // _usrUrl = 'https://api.calenaur.com/usr/';
  // _changeUsernameUrl = 'https://api.calenaur.com/user/changename';
  // _changePasswordUrl = 'https://api.calenaur.com/user/changepassword';
  // _usersPageUrl = 'https://api.calenaur.com/users/';


  _signupUrl = 'http://localhost:1323/signup';
  _loginUrl = 'http://localhost:1323/login';
  _restrictedUrl = 'http://localhost:1323/restricted';
  _helloUrl = 'http://localhost:1323/hello';
  _usrUrl = 'http://localhost:1323/usr/';
  _changeUsernameUrl = 'http://localhost:1323/user/changename';
  _changePasswordUrl = 'http://localhost:1323/user/changepassword';
  _usersPageUrl = 'http://localhost:1323/users/';

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
      );
  }

  login(user:FormData){
    return this.http.post<any>(this._loginUrl, user).pipe(
      retry(3),
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

  isAdmin(): boolean{
    return (this.getAuthLevel() == 0);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getAuthLevel(): number{
    return JSON.parse(atob(this.getToken().split('.')[1])).access;
  }

  getUserId(): string{
    return JSON.parse(atob(this.getToken().split('.')[1])).sub;
  }

  getUserData(){ 
    return this.validate(this.http.get(this._usrUrl.concat(this.getUserId())));
  }

  getUsers(page: number){
    return this.validate(this.http.get<any>(this._usersPageUrl.concat(""+page)));
  }
}
