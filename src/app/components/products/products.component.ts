import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  public loading = new BehaviorSubject<boolean>(true);

  constructor(private productService: ProductsService) {}

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

      },
      complete: () => {
        this.loading.next(false);
      },
    });

    // this.productService.getAllProducts().subscribe((data: any) => {
    //   this.products = data['data']['items'];
    // });
  }
}
