import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
  username?: User;
  email?: User;
  name?: User;
  phone?: User;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.fetchProfile();
  }

  private fetchProfile() {
    this.profileService.getProfile().subscribe((data: any) => {
      this.username = data['data']['user']['username'];
      this.email = data['data']['user']['email'];
      this.name = data['data']['user']['name'];
      this.phone = data['data']['user']['phone'];
    });
  }
}
