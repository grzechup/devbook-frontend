import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  searchValue: string = "";
  searchedUsers: User[] = [];
  invitations: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(result => {
      console.log(result.invitationsToFriends);
      this.invitations = result.invitationsToFriends;
    })

  }

  onSearchButtonClick() {
    if(this.searchValue.length > 0) {
      console.log(this.searchValue);
      this.userService.searchUsersWithName(this.searchValue).subscribe(result => {
        this.searchedUsers = result.content;
        console.log(result.content);
      });
    }

  }

  onInviteToFriendsListClick(user: User) {
    if(!!user){
      this.userService.inviteToFriendsList(user).subscribe(result => {
        console.log(result);
      });
    }
  }

  onAcceptInvitationClick(user: User) {
    if(!!user){
      this.userService.acceptInvitationToFriendsList(user).subscribe(result => {
        console.log(result);
      })
    }
  }
}
