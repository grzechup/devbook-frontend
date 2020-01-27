import {Role} from "./enum/role.enum";
import {InvitationsToFriends} from "./invitations-to-friends.model";

export class User {

  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
  friends: InvitationsToFriends[];
  friendsAccepted: InvitationsToFriends[];
  invitedFriends: InvitationsToFriends[];
  invitationsToFriends: InvitationsToFriends[];
  experience: number;




}
