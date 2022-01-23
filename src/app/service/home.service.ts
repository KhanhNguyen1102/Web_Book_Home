import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Home} from "../model/home";
const api_url='http://localhost:8080/api/homes'
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }
  // @ts-ignore
  findOne(id) : Observable<Home>{
    return this.http.get<Home>(api_url+'/'+id)
  }
  show5Home() :Observable<Home[]>{
    return this.http.get<Home[]>(api_url+'/find5HomeMostRated')
  }
}
