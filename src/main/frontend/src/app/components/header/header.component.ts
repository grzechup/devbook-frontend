import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../security/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
