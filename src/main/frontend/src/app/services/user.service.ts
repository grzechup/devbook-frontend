import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LoggedInUser} from "../model/logged-in-user.model";

@Injectable()
export class UserService {

  private REGISTER_URL = environment.restUrl + 'api/auth/register';

  public loggedInUser: LoggedInUser;

  constructor(private http: HttpClient) {
  }

  register(form) {
    console.log("register: " + form.username);
    return this.http.post(this.REGISTER_URL, {
      username: form.username,
      password: form.password,
      email: form.email,
/*      dateOfBirth: form.dateOfBirth,*/
      firstName: form.firstName,
      lastname: form.lastName,
    })
  }

  

}
