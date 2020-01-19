import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user.model";
import {Observable} from "rxjs";
import {TokenStorageService} from "../security/token-storage.service";

@Injectable()
export class UserService {

  private REGISTER_URL = environment.restUrl + 'api/auth/register';

  private GET_USER_URL:string = environment.restUrl + 'user';

  constructor(private http: HttpClient,
              private tokenStorage: TokenStorageService) {
  }

  //TODO: zrobic jakiegos promisa albo subjecta z ktorego bedzie mozna pobierac usera bez wysylania requesta
  getLoggedInUser(): Observable<User>{
    let user_auth = this.tokenStorage.getUser();
    return this.http.get<User>(this.GET_USER_URL+ `/${user_auth.username}`);
  }

  register(form) {
    console.log("register: " + form.username);
    return this.http.post(this.REGISTER_URL, {
      username: form.username,
      password: form.password,
      email: form.email,
/*      dateOfBirth: form.dateOfBirth,*/
      firstname: form.firstName,
      lastname: form.lastName,
    })
  }



}
