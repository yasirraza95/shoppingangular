import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Orders } from 'src/app/interfaces/orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OrdersComponent implements OnInit {
  orders: Orders[] = [];
  public loading = new BehaviorSubject<boolean>(true);
  errorMsg: string = '';

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  private fetchOrders() {
    this.loading.next(true);

    this.ordersService.getOrders().subscribe({
      next: (data: any) => {
        this.orders = data['data']['order'];
      },
      error: (error: any) => {
        this.loading.next(false);
        this.errorMsg = error.error.message;
      },
      complete: () => {
        this.loading.next(false);
      },
    });
  }

  viewDetail(id: String) {
    this.router.navigate(['/detail'], { queryParams: { id: id } });
  }
}
