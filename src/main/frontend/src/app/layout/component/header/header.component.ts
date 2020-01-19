import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../../security/token-storage.service";
import {User} from "../../../model/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  private loggedInUser: User;

  constructor(private tokenStorage: TokenStorageService,
              private userService: UserService) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(result => {
      this.loggedInUser = result;
      console.log(result);
    })
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
