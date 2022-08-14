import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/interfaces/user-data';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token-service.service';

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

  constructor(private tokenService: TokenService, private router: Router) {
    this.isLoggedIn = !!this.tokenService.getToken();
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();
  }

  public logout() {
    this.tokenService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
