import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Image} from "../model/image";
const api_url='http://localhost:8080/api/homes'
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

   // @ts-ignore
  findAllImgByHome(id): Observable<Image[]>{
    return this.http.get<Image[]>(api_url+'/findAllImg?idH='+id)
   }
}
