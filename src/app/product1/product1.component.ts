import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1', // Adjust selector for each component
  templateUrl: './product1.component.html', // Adjust template URL
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  productName = "Product 1"; // Replace with your product name
  productDescription = "This is a description of product 1."; // Replace with your product description

  constructor() { }

  ngOnInit(): void {
  }
}
