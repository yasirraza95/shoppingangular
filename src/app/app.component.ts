import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemCart: number = 0;

  constructor(public router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartCounter.subscribe((d) => {
      this.itemCart = d.length;
    });
  }
}
