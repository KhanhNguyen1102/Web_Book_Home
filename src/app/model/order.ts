import {User} from "./user";
import {Home} from "./home";

export interface Order {
  id?:string,
  bookingDate?:string,
  startDate?:string,
  endDate?:string,
  user?:User,
  home?:Home,
}
