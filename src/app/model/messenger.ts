import {User} from "./user";

export interface Messenger {
  id?:string,
  userN?:User,
  userG?:User,
  content?:string,
}
