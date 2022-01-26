import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../model/order";
const api_url='http://localhost:8080/api/orders'
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  saveOrder(order:Order) :Observable<Order>{
    return this.http.post<Order>(api_url,order)
  }findAllOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(api_url);
  }

}
