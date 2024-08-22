import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  images = [
    {
      path: '../../../assets/home-carrousel/home-img-woman.jpg',
      alt: 'Woman with a shopping bag next to a rack of dresses',
      title: 'A Queen must have it all',
      description: 'Stylish pre-owned dresses for women.',
    },
    {
      path: '../../../assets/home-carrousel/home-img-man.jpg',
      alt: 'Man jumping in the air wearing casual clothes',
      title: 'A King can be casual sometimes',
      description: 'Trendy second-hand casual wear for men.',
    },
    {
      path: '../../../assets/home-carrousel/home-image-girl.jpg',
      alt: 'Girl sitting on a skateboard wearing a denim jacket',
      title: 'Latest trends the princess',
      description: 'Cute pre-loved denim jacket for girls.',
    },
    {
      path: '../../../assets/home-carrousel/home-image-boy.jpg',
      alt: 'Boy wearing sunglasses wearing a cool sweater',
      title: 'A Sweater for the prince',
      description: 'Buy a sweater and get a smile as a reward',
    },
  ];
}
