import { Component } from '@angular/core';

@Component({
  selector: 'app-image-galary',
  templateUrl: './image-galary.component.html',
  styleUrls: ['./image-galary.component.scss']
})
export class ImageGalaryComponent {
  clients = [
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-0.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-8.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },    
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-7.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-11.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-10.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-9.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-6.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-5.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-4.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-3.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-2.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    { 
      name: 'Anna Marie', 
      image: 'assets/images/scull-1.jpg',  
      quote: 'consequat duis aute irure dolor', 
      feedback: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    }
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
