import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';
const CART_KEY = 'cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: any = [];
  cartCounter = new BehaviorSubject([]);

  constructor() {
    const ls = this.getCartData();
    if (ls) this.cartCounter.next(ls);
  }

  addItem(product: Product) {
    const ls = this.getCartData();
    let exist;
    if (Object.keys(ls).length > 0)
      exist = ls.find((item: Product) => {
        return item._id === product._id;
      });

    if (exist) {
      exist.quantity++;
      this.setCartData(ls);
    } else {
      product.quantity = 1;

      if (Object.keys(ls).length > 0) {
        const newData = [...ls, product];
        this.setCartData(newData);
      }

      this.cartItems.push(product);
      this.setCartData(this.cartItems);
    }
  }

  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartCounter.next(this.getCartData());
  }

  getCartData() {
    return JSON.parse(localStorage.getItem('cart') || '{}');
  }
}
