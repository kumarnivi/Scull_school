import { Component } from '@angular/core';

@Component({
  selector: 'app-image-galary',
  templateUrl: './image-galary.component.html',
  styleUrls: ['./image-galary.component.scss']
})
export class ImageGalaryComponent {
  clients = [
    { name: 'LusDen', image: 'assets/images/scull_schoolbg.jpg', quote: 'magna aliqua. Ut', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
    { name: 'Zen Court', image: 'assets/images/scull_schoolbg.jpg', quote: 'magna aliqua. Ut', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
    { name: 'Zen Court1', image: 'assets/images/scull_schoolbg.jpg', quote: 'magna aliqua. Ut', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
    { name: 'Zen Court2', image: 'assets/images/scull_schoolbg.jpg', quote: 'magna aliqua. Ut', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },
    { name: 'Zen Court3', image: 'assets/images/scull_schoolbg.jpg', quote: 'magna aliqua. Ut', feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis' },

    // Add more clients as needed
  ];

  constructor() { }

  carouselOptions = {
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: false,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  };

  ngOnInit(): void {
  }

}
