import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderDetail } from '../interfaces/order-detail';
import { Orders } from '../interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + environment.token,
    }),
  };

  constructor(private http: HttpClient) { }

  getDetail(id: String) {
    return this.http.get<OrderDetail[]>(
      environment.API_URL + '/order/detail/' + id,
      this.httpOptions
    );
  }
}
