import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

export class JwtResponse{
  constructor(
    public jwttoken:string,
  ) {}

}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private API_URL = environment.restUrl;
  private authUrl: string = environment.restUrl + 'auth';
  private LOGIN_URL: string = environment.restUrl + 'api/auth/login';
  /*  private  REGISTER_URL: string = environment.restUrl + 'auth/register';*/
  private JWT_REFRESH_URL: string = environment.restUrl + 'jwt-refresh'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  static readonly COOKIE_AUTHORIZATION_NAME = "Authorization";


  constructor(
    private httpClient: HttpClient
  ) {
  }

  login(username, password): Observable<any> {
    return this.httpClient.post(this.LOGIN_URL, {
      username: username,
      password: password
    }, httpOptions);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('auth-token');
    console.log(user);
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
