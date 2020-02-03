import {User} from "./user.model";
import {IComment} from "./comment.model";

export class BoardComment extends IComment{
  id: number;
  content: string;
  likes: User[];
  created: Date;
}
