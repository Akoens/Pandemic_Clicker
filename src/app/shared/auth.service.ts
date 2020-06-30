import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //_hostDN = 'http://localhost:1323/';
  _hostDN = 'https://api.calenaur.com/';

  //Test / base urls
  _signupUrl = `${this._hostDN}signup`;
  _loginUrl = `${this._hostDN}login`;
  _helloUrl = `${this._hostDN}hello`;
  _usrUrl =`${this._hostDN}user`;
  
  //User urls
  _changeUsernameUrl = `${this._hostDN}user/username`;
  _changePasswordUrl = `${this._hostDN}user/password`;
  _deleteAccountUrl = `${this._hostDN}user/`;

  //Admin urls
  _restrictedUrl = `${this._hostDN}restricted`;
  _usersPageUrl = `${this._hostDN}restricted/users`;
  _totalUsersUrl = `${this._hostDN}restricted/usercount`;
  _makeUserAdminUrl = `${this._hostDN}restricted/makeuseradmin`;
  _deleteUserUrl = `${this._hostDN}restricted/user/`;


  constructor(private http: HttpClient, private router: Router) { }

  validate(observable:Observable<any>): any{
    observable.subscribe(
      res => {},
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401 || err.status === 403){
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }
        console.log(err)
      }
    );
    return observable;
  }

  makeAdmin(user: FormData){
    return this.validate(this.http.put(this._makeUserAdminUrl,user));
  }

  deleteAccount(){
    return this.validate(this.http.delete(this._deleteAccountUrl));
  }

  deleteUser(userid:string): Observable<any>{
    return this.validate(this.http.delete<any>(this._deleteUserUrl+userid));
  }

  changeUsername(user:FormData): Observable<any>{
    return this.validate(this.http.put<any>(this._changeUsernameUrl, user));
  }

  changePassword(user:FormData): Observable<any>{
    return this.validate(this.http.put<any>(this._changePasswordUrl, user));
  }


  signup(user:FormData): Observable<any>{
    return this.http.post<any>(this._signupUrl, user).pipe(
      retry(3),
      );
  }

  login(user:FormData): Observable<any>{
    return this.http.post<any>(this._loginUrl, user).pipe(
      retry(3),
    );
  }

  logout(): void{
    console.log("logout");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  //Conditions
  loggedIn():boolean{
    return !! localStorage.getItem('token');
  }

  isAdmin(): boolean{
    return (this.getAuthLevel() > 99);
  }


  //Getters
  getRestricted(): Observable<any>{
    return this.validate(this.http.get<any>(this._restrictedUrl));
  }

  getToken(): string{
    return localStorage.getItem('token');
  }

  getAuthLevel(): number{
    return JSON.parse(atob(this.getToken().split('.')[1])).access;
  }

  getUserId(): string{
    return JSON.parse(atob(this.getToken().split('.')[1])).sub;
  }

  getUserData(): Observable<any>{ 
    return this.validate(this.http.get(this._usrUrl));
  }

  getUsers(page: HttpParams): Observable<any>{
    return this.validate(this.http.get<any>(this._usersPageUrl,{params: page}));
  }

  getTotalUsers(): Observable<any>{
    return this.validate(this.http.get<any>(this._totalUsersUrl));
  }
}
