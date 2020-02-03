import {IComment} from "./comment.model";
import {User} from "./user.model";

export class NullpointerComment extends IComment {

  pointsUp: User[];
  pointsDown: User[];

}
