import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../model/comment";
const api_url='http://localhost:8080/api/homes'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http : HttpClient) {}
  // @ts-ignore
  findAllByHome(id) : Observable<Comment>{
    return this.http.get<Comment>(api_url+'comments?'+id)
  }
}
