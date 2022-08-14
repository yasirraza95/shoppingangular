import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
const CART_KEY = 'cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  cartItems: any = [];

  constructor() {
    this.cartItems = localStorage.getItem(CART_KEY);
  }

  addToCart(product: Product) {
    this.items.push(product);
    localStorage.setItem(CART_KEY, JSON.stringify(this.items));
    window.alert('Your product has been added to the cart!');
  }

  loadCart() {
    this.cartItems = localStorage.getItem(CART_KEY) ?? [];
    // this.cartItems = JSON.parse(this.cartItems);
    console.log(this.cartItems)
  }

  saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(this.cartItems));
  }

  getCart() {
    return this.items;
  }

  getItems() {
    return this.cartItems;
  }

  getCartNew() {
    return JSON.parse(this.cartItems);
  }

  removeItem(item: Product) {
    const index = this.items.findIndex((o) => o._id === item._id);
    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  clearCart() {
    this.items = [];
    localStorage.setItem(CART_KEY, JSON.stringify(this.items));
    return this.items;
  }
}
