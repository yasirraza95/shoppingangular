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
  constructor(private cartService: CartService) {}
  cartItem = [];
  total = 0;

  ngOnInit(): void {}

  minusQuantity(cart: Product) {}

  addQuantity(cart: Product) {}

  removeProduct(cart: Product) {}

  shippingHandler() {}
}
