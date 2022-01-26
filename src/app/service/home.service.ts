import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Home} from "../model/home";
import {Image} from "../model/image";

const api_url = 'http://localhost:8080/api/homes'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  showListHomeAll(): Observable<Home[]> {
    return this.http.get<Home[]>(api_url)
  }

  // @ts-ignore
  getListImg(idH) {
    return this.http.get<Image[]>(api_url + '/findAllImg?idH=' + idH)
  }

  // @ts-ignore
  findOne(id): Observable<Home> {
    return this.http.get<Home>(api_url + '/' + id)
  }

  show5Home(): Observable<Home[]> {
    return this.http.get<Home[]>(api_url + '/find5HomeMostRated')
  }


}
