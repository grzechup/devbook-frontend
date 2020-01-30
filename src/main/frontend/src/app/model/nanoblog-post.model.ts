import {User} from "./user.model";
import {BoardComment} from "./board-comment.model";
import {NanoblogComment} from "./nanoblog-comment.model";

export class NanoblogPost {

  id: number;
  user: User;
  content: string;
  likes: User[];
  minuses: User[];
  nanoblogComments: NanoblogComment[];
  created: Date;
}
