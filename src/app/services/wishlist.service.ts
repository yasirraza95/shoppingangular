import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + environment.token,
    }),
  };

  constructor(private http: HttpClient) {}

  getWishlist() {
    return this.http.get<Product[]>(
      environment.API_URL + '/wishlist/get/' + environment.user,
      this.httpOptions
    );
  }
}
