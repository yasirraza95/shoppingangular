import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { TokenService } from './token-service.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    }),
  };

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getWishlist() {
    return this.http.get<Product[]>(
      environment.API_URL + '/wishlist/get/' + environment.user,
      this.httpOptions
    );
  }

  removeItem(id: string) {
    return this.http.delete<void>(
      environment.API_URL + '/wishlist/delete/' + id,
      this.httpOptions
    );
  }
}
