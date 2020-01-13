import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


export class User{
  constructor(
    public status:string,
  ) {}

}

export class JwtResponse{
  constructor(
    public jwttoken:string,
  ) {}

}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private  API_URL = environment.restUrl;
  private  authUrl:string = environment.restUrl + 'auth';
  private  LOGIN_URL: string = environment.restUrl + 'login';
  private  REGISTER_URL: string = environment.restUrl + 'register';
  private  JWT_REFRESH_URL: string = environment.restUrl + 'jwt-refresh'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  static readonly COOKIE_AUTHORIZATION_NAME = "Authorization";

  public username: String;
  public password: String;

  constructor(
    private httpClient:HttpClient
  ) {
  }

  login(): Observable<any> {
    return this.httpClient.post(this.LOGIN_URL , {
      username: this.username,
      password: this.password
    }, httpOptions);
  }


/*  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )

    );
  }*/


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}






/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import * as jwt_decode from 'jwt-decode';
import {Observable} from "rxjs";
import {LoggedInUser} from "../model/logged-in-user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  private static API_URL = environment.restUrl;
  private static authUrl:string = environment.restUrl + 'auth';
  private static LOGIN_URL: string = environment.restUrl + 'login';
  private static REGISTER_URL: string = environment.restUrl + 'register';
  private static JWT_REFRESH_URL: string = environment.restUrl + 'jwt-refresh'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  static readonly COOKIE_AUTHORIZATION_NAME = "Authorization";

  public username: String;
  public password: String;

  constructor(private http: HttpClient,
              private cookieService: CookieService) {

  }

  login() {
    return this.http.get<any>(AuthenticationService.LOGIN_URL, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      observe: 'response',
      withCredentials: true
    }).subscribe();
  }

  changePassword(oldPassword: string, newPassword: string) {
    return this.http.post<any>(AuthenticationService.API_URL + `/change-password`, {
        "oldPassword": oldPassword,
        "newPassword": newPassword
      },
      {observe: 'response', withCredentials: true})
  }
/!*
  performLogin(vpbxNumber: string, username: string, password: string, language: string) {
    return this.http.post<any>(AuthenticationService.PERFORM_LOGIN_URL, {
        "vpbxNumber": vpbxNumber,
        "username": username,
        "password": password,
        "language": language
      },
      {observe: 'response', withCredentials: true})
      .pipe(map(resp => {
        return resp;
      }));
  }*!/

  logout(){
    return this.http.post<any>(AuthenticationService.API_URL + `/logout`, {},{observe: 'response', withCredentials: true});
  }

  deleteAuthorizationCookie() {
    if (this.cookieService.check(AuthenticationService.COOKIE_AUTHORIZATION_NAME)) {
      this.cookieService.delete(AuthenticationService.COOKIE_AUTHORIZATION_NAME, '/');
    }
  }

  isAuthenticated(): boolean {
    const token = this.cookieService.get(AuthenticationService.COOKIE_AUTHORIZATION_NAME)
    if (!token) {
      console.log('No JWT cookie')
      return false;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    const expired = !(date.valueOf() > new Date().valueOf());
    return !expired;
  }

  getJwtExpirationDate(): Date {
    const token = this.cookieService.get(AuthenticationService.COOKIE_AUTHORIZATION_NAME)
    if (!token) {
      return null;
    }
    return this.getTokenExpirationDate(token)
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null;
    }
    return new Date(decoded.exp * 1000);
  }

/!*
  checkIsAuthorizedToReadMessages() {
    return this.http.get(AuthenticationService.CHECK_AUTH_URL, {withCredentials: true});
  }
*!/

  refreshJwt() {
    return this.http.post<any>(AuthenticationService.JWT_REFRESH_URL, {},
      {observe: 'response', withCredentials: true});
  }

  getDataForLoggedUser() : Observable<LoggedInUser>{
    return this.http.get<LoggedInUser>(AuthenticationService.API_URL + `/user-session-info`, {withCredentials: true})
      .pipe(tap(loggedInUser => {
/!*          this.store.dispatch(new SetLoggedInUser(loggedInUser));
          this.websocketService.connect(loggedInUser.vpbxId);
          this.store.dispatch(new SetLoggedInUser(loggedInUser))*!/
        }
      ));
  }

/!*  authenticationService(username: String, password: String) {
    return this.http.get(this.authUrl,
      { headers: { authorization: this.createBasicAuthToken(username, password) } })
      .pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, password);
    }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }*!/
}
*/
