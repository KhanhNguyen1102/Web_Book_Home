import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hometime} from "../model/hometime";
import {Order} from "../model/order";
const API_URL = 'http://localhost:8080/api/hometimes/'
const API_URL_ORDER = 'http://localhost:8080/api/orders/'
@Injectable({
  providedIn: 'root'
})
export class HometimeService {

  constructor(private httpClient : HttpClient) { }

  listAllHomeTime(): Observable<Hometime[]> {
    return this.httpClient.get<Hometime[]>(API_URL);
  }

  getHome(id: any): Observable<Hometime> {
    return this.httpClient.get<Hometime>(API_URL + `getHomeTimes/${id}`);
  }

  save(house: Hometime): Observable<Hometime> {
    return this.httpClient.post<Hometime>(API_URL, house);
  }

  delete(id: number) {
    return this.httpClient.delete<Hometime>(API_URL + `${id}`)
  }

  update(id: number, house: Hometime): Observable<Hometime> {
    return this.httpClient.put<Hometime>(API_URL + `${id}`, house);
  }

  // @ts-ignore
  searchByHome(id): Observable<Hometime[]> {
    return this.httpClient.get<Hometime[]>(API_URL + `searchByHome/${id}`)
  }

  saveOrder(order: Order): Observable<Order> {
    console.log("vào save oder")
    return this.httpClient.post<Order>("http://localhost:8080/api/orders", order);
  }

}
