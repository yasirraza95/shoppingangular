import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Orders } from '../interfaces/orders';
import { TokenService } from './token-service.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    }),
  };

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getOrders() {
    return this.http.get<Orders[]>(
      environment.API_URL + '/order/get/' + environment.user,
      this.httpOptions
    );
  }
}
