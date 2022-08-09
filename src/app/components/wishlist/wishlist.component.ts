import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Wishlist } from 'src/app/interfaces/wishlist';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class WishlistComponent implements OnInit {
  wishlists: Wishlist[] = [];
  public loading = new BehaviorSubject<boolean>(true);

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.fetchWishlist();
  }

  private fetchWishlist() {
    this.loading.next(true);

    this.wishlistService.getWishlist().subscribe({
      next: (data: any) => {
        this.wishlists = data['data']['wishlist'];
      },
      error: (error: any) => {},
      complete: () => {
        this.loading.next(false);
      },
    });
  }

  deleteWishlist(id: String) {}

  moveToCart(id: String) {}
}
