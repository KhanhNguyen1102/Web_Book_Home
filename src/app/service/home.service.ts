import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Home} from "../model/home";
import {Image} from "../model/image";
import {Category} from "../model/category";

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

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(api_url + '/findAllCategory');
  }

  save(home: Home): Observable<Home> {1343
    return this.http.post<Home>(api_url + '/createHome', home);
  }

  saveImg(image: Image): Observable<Image> {
    return this.http.post<Image>(api_url + '/loadImage', image)
  }

}
