import {Role} from "./enum/role.enum";

export class User {

  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
  friends: User[];
  experience: number;




}
