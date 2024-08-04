import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product3', // Adjust selector for each component
  templateUrl: './product3.component.html', // Adjust template URL
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {

  productName = "Product 3"; // Replace with your product name
  productDescription = "This is a description of product 3."; // Replace with your product description

  constructor() { }

  ngOnInit(): void {
  }
}
