import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements OnInit {
  loggedInUser?: User;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
}
