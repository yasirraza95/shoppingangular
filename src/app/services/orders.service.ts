import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Orders } from '../interfaces/orders';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + environment.token,
    }),
  };

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<Orders[]>(
      environment.API_URL + '/order/get/' + environment.user,
      this.httpOptions
    );
  }
}
