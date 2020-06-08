import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry,  tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _signupUrl = 'http://localhost:1323/signup'; //'https://api.calenaur.com/signup'; // 
  _loginUrl = 'http://localhost:1323/login'; //https://api.calenaur.com/login';
  _restrictedUrl = 'http://localhost:1323/restricted'; //https://api.calenaur.com/restricted';

  constructor(private http: HttpClient, private router: Router) { }

  validate(observable:Observable<any>){
    observable.subscribe(
      res => {},
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status != 200){
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

  getRestricted(){
    return this.validate(this.http.get<any>(this._restrictedUrl));
  }

  signup(user:any){
    return this.http.post<any>(this._signupUrl, user).pipe(
      retry(3),
      tap(err => console.log(err))
      );
  }

  login(user:any){
    return this.http.post<any>(this._loginUrl, user).pipe(
      retry(3),
      tap(err => console.log(err))
    );
  }

  logout(){
    console.log("logout");
    localStorage.clear();
  }

  loggedIn():boolean{
    return !! localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
