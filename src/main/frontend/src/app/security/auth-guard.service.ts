import {AuthenticationService} from "./authentication.service";
import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router) { }
  canActivate(): boolean {
    if (this.authService.isUserLoggedIn()) {
      console.log('You can be here.');
      return true;
    }
    this.router.navigate(['login']);
    console.log('You can not be here!');
    return false;
  }
}
