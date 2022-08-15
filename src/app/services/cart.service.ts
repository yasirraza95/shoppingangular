import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
const CART_KEY = 'cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any = [];

  constructor() {}
  
  addItem(product: Product) {
  console.log(this.cartItems);

    const exist = this.cartItems.find((item: any) => {
      return item._id === product._id;
    });

    if (exist) {
      exist.quantity++;
    } else {
      this.cartItems.push(product);
    }
  }
}
