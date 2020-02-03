import {User} from "./user.model";
import {NullpointerComment} from "./nullpointer-comment.model";

//TODO: zrobic bazowe klasy post itp zeby dziedziczyc
export class NullpointerPost {
  id: number;
  points: User[];
  views: User[];
  isResolved: boolean;
  user: User;
  content: string;
  created: Date;
  title: string;
  nullpointerComments: NullpointerComment[];
}
