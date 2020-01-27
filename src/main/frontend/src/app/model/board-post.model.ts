import {User} from "./user.model";
import {UserComment} from "./user-comment.model";

export class BoardPost {

  id: number;
  user: User;
  content: string;
  likes: User[];
  comments: UserComment[];
  created: Date;
}
