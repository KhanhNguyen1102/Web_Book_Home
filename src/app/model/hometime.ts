import {Home} from "./home";
import {StatusHome} from "./status-home";

export interface Hometime {
  id?:string,
  date?:string,
  home?:Home,
  statusHome?:StatusHome,
}
