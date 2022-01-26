import {Role} from "./role";


export interface User {
  id?:string,
  username?:string,
  password?:string,
  confirmPassword?:string,
  enabled?:boolean,
  status?:string,
  role?:[Role],
  accessToken?: string;
}
