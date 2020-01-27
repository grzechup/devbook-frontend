import {User} from "./user.model";
import {BoardComment} from "./board-comment.model";

export class BoardPost {

  id: number;
  user: User;
  content: string;
  likes: User[];
  boardComments: BoardComment[];
  created: Date;
}
