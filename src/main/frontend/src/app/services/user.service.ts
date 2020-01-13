import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  private REGISTER_URL = environment.restUrl + 'register';

  constructor(private http: HttpClient) {
  }

  register(form) {
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
