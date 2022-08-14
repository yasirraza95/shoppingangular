import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderDetail } from '../interfaces/order-detail';
import { Orders } from '../interfaces/orders';
import { TokenService } from './token-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    }),
  };

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getDetail(id: String) {
    return this.http.get<OrderDetail[]>(
      environment.API_URL + '/order/detail/' + id,
      this.httpOptions
    );
  }
}
