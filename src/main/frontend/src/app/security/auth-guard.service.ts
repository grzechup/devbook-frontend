import {AuthenticationService} from "./authentication.service";
import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(): boolean {
/*    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }*/
    return true;
  }
}
