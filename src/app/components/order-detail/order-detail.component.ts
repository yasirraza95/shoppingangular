import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { OrderDetail } from 'src/app/interfaces/order-detail';
import { Orders } from 'src/app/interfaces/orders';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OrderDetailComponent implements OnInit {
  id: String;
  details: OrderDetail[] = [];
  public loading = new BehaviorSubject<boolean>(true);

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private ordersDtlService: OrderDetailService
  ) {
    this.id = "";
  }

  ngOnInit(): void {
    this.currentRoute.queryParams.subscribe((params) => {
      this.id = params['id'] || 0;
    });

    if (this.id == '') {
      this.router.navigate(['/orders']);
    }

    this.fetchDetail();
  }

  private fetchDetail() {
    this.loading.next(true);

    this.ordersDtlService.getDetail(this.id).subscribe({
      next: (data: any) => {
        this.details = data['data']['order'][0]['order_detail'];
        console.log(this.details);
      },
      error: (error: any) => {},
      complete: () => {
        this.loading.next(false);
      },
    });
  }
}
