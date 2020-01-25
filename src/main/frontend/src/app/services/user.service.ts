import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {User} from "../model/user.model";
import {Observable} from "rxjs";
import {TokenStorageService} from "../security/token-storage.service";
import {Page} from "../model/page.model";

@Injectable()
export class UserService {

  private REGISTER_URL = environment.restUrl + 'api/auth/register';
  private GET_USER_URL: string = environment.restUrl + 'user';
  private SEARCH_USER_BY_USERNAME_URL: string = environment.restUrl + 'user/search';
  private INVITE_TO_FRIENDS_LIST_URL: string = environment.restUrl + 'user/invite';
  private GET_USER_INVITATIONS_URL: string = environment.restUrl + 'user/invitations';
  private ACCEPT_INVITATION_TO_FRIENDS_LIST_URL: string = environment.restUrl + '/user/invitations/accept';

  constructor(private http: HttpClient,
              private tokenStorage: TokenStorageService) {
  }

  //TODO: zrobic jakiegos promisa albo subjecta z ktorego bedzie mozna pobierac usera bez wysylania requesta
  getLoggedInUser(): Observable<User> {
    let user_auth = this.tokenStorage.getUserAuth();
    return this.http.get<User>(this.GET_USER_URL + `/${user_auth.username}`);
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

  searchUsersWithName(searchValue: string): Observable<Page> {
    let params = new HttpParams();
    //TODO: dodac parametry paginacji
    params = params.append('page', '0');
    params = params.append('size', '10');
    params = params.append('username', searchValue)
    return this.http.get<Page>(this.SEARCH_USER_BY_USERNAME_URL, {params: params});
  }

  inviteToFriendsList(user: User) {
    return this.http.post(this.INVITE_TO_FRIENDS_LIST_URL, {
      mainUsername: this.tokenStorage.getUserAuth().username,
      usernameToProcess: user.username
    });
  }

  acceptInvitationToFriendsList(user: User) {
    return this.http.post(this.ACCEPT_INVITATION_TO_FRIENDS_LIST_URL, {
      mainUsername: this.tokenStorage.getUserAuth().username,
      usernameToProcess: user.username
    });
  }
}
