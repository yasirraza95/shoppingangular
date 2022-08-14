import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CartComponent implements OnInit {
  carts = this.cartService.getCart();
  total = 0;
  newQuantity = 0;
  cartItem = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.loadCart();
    this.total = this.cartItem.reduce((a, c) => a + c['price'] * c['quantity'], 0);
    this.cartItem = this.cartService.getCartNew();
    console.log(this.cartItem)
  }

  ngDoCheck(): void {
    this.total = this.cartItem.reduce((a, c) => a + c['price'] * c['quantity'], 0);
  } 

  removeProduct(product: Product) {
    this.cartService.removeItem(product);
    this.cartItem = this.cartService.getCartNew();
  }

  addQuantity(product: Product) {
    this.newQuantity = product.quantity + 1;
        
  }

  minusQuantity(product: Product) {
    this.newQuantity = product.quantity - 1;
  }

  shippingHandler() {

  }
}
