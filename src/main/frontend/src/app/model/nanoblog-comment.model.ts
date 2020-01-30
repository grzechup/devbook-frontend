import {User} from "./user.model";

export class NanoblogComment {
  id: number;
  content: string;
  user: User[];
  likes: User[];
  created: Date;
}
