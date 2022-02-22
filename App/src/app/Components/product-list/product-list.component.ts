import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  products = [1, 2, 3, 4, 5, 6, 7, 8];

  description?: string;
  name?: string;
  imageRef?: string;

  ngOnInit(): void {
    this.description =
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ';
    this.imageRef =
      'https://material.angular.io/assets/img/examples/shiba2.jpg';
    this.name = 'jachico';
  }
}
