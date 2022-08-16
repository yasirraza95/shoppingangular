import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/interfaces/user-data';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token-service.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements OnInit, UserData {
  isLoggedIn;
  cart = 0;
  wishlist = 0;
  cartNo: number = 0;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private cartService: CartService
  ) {
    this.isLoggedIn = !!this.tokenService.getToken();
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();
    this.cartService.cartCounter.subscribe((d) => {
      this.cartNo = d.length;
    });
  }

  public logout() {
    this.tokenService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
