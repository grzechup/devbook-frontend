export interface LoggedInUser {
  mainNumber: string;
  userLogin: string;
  vpbxId: number;
  language: string;
  roles: string[];
  sessionExpireTimeMilis: number;
}
