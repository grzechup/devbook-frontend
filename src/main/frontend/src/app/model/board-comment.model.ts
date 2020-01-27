import {User} from "./user.model";

export class BoardComment{
  id: number;
  content: string;
  user: User[];
  likes: User[];
  created: Date;
}
