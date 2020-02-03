import {User} from "./user.model";

export class IComment {
  id: number;
  created: Date;
  content: string;
  user: User;
}
