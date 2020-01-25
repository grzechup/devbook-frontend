import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../security/authentication.service";
import {TokenStorageService} from "../../security/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  isLoginFailed: boolean = false;
  isLoggedIn = false;
  roles = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private tokenStorage: TokenStorageService) {   }

  ngOnInit() {
    let token = this.tokenStorage.getToken();
    console.log(token);
    if (token !=null) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUserAuth().roles;
      this.router.navigate(['/site/board']);
    }
  }

  handleLogin() {
    this.authenticationService.login(this.username, this.password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUserAuth().roles;
        this.router.navigate(['/site/board']);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}