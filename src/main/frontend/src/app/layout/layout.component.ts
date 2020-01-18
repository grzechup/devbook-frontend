import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../security/token-storage.service";
import {Role} from "../enum/role.enum";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes(Role.ROLE_ADMIN);
      this.showModeratorBoard = this.roles.includes(Role.ROLE_MODERATOR);

      this.username = user.username;
    }
  }

}
