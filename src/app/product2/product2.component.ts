import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product2', // Adjust selector for each component
  templateUrl: './product2.component.html', // Adjust template URL
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  productName = "Product 2"; // Replace with your product name
  productDescription = "This is a description of product 2."; // Replace with your product description

  constructor() { }

  ngOnInit(): void {
  }
}
