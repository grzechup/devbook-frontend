import {User} from "./user.model";
import {UserComment} from "./user-comment.model";

export class BoardPost {

  id:number;
  userId: number;
  content:string;
  likes: User[];
  comments: UserComment[];
}
