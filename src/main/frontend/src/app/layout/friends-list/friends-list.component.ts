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
  friends: User[] = [];
  searchedUsers: User[] = [];
  invitedFriends: User[] = []
  invitations: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getLoggedInUser().subscribe(result => {
      console.log(result);
    });

    this.userService.getFriendsAndInvitations().subscribe(result => {
      this.populateFields(result);
    });
  }

  populateFields(user:User){
    this.invitedFriends = user.invitedFriends.map(i => i.to);
    this.invitations = user.invitationsToFriends.map(i =>i.from);
    this.friends = user.friends.map(f => f.from);
    user.friendsAccepted.map(f => f.to).forEach(f => this.friends.push(f));
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
        this.ngOnInit();
      })
    }
  }
}
