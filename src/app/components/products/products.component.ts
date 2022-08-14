import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
  // products: Product[] = [];
  products: Product[] = [];
  public loading = new BehaviorSubject<boolean>(true);
  errorMsg = '';

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getAllProds();
  }

  private getAllProds() {
    this.loading.next(true);

    this.productService.getAllProducts().subscribe({
      next: (data: any) => {
        this.products = data['data']['items'];
      },
      error: (error: any) => {
        this.errorMsg = error.error.message;
      },
      complete: () => {
        this.loading.next(false);
      },
    });

    // this.productService.getAllProducts().subscribe((data: any) => {
    //   this.products = data['data']['items'];
    // });
  }
  // cartItems = [
  //   {
  //     _id: '1',
  //     quantity: 1,
  //   },
  // ];

  addToCart(product: Product) {
    // const existProduct = this.cartItems.find((x) => x._id === product.id);
    // const quantity = existProduct ? existProduct.quantity + 1 : 1;
    // if (quantity == 1) {
    //   console.log('exits');
    // } else {
    //   console.log('new');
    // }
    // return;
    product.quantity = 1;

    this.cartService.addToCart(product);
  }
}
