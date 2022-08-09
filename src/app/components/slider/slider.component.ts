import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [NgbCarouselConfig],
})
export class SliderComponent implements OnInit {
  title = 'ng-carousel-demo';

  images = [
    {
      title: 'Welcome to our shop',
      short:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.',
      src: 'assets/images/24slideone.jpg',
    },
    {
      title: 'Welcome to our shop',
      short:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.',
      src: 'assets/images/29slidetwo.jpg',
    },
    {
      title: 'Welcome to our shop',
      short:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.',
      src: 'assets/images/24slideone.jpg',
    },
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {}
}
