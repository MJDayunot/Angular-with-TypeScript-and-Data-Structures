import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/productlist.service'; // Move up two levels


interface Product {
  name: string;      // Name of the product
  price: number;     // Price of the product
  quantity: number;  // Quantity of the product in stock
}

@Component({
  selector: 'app-product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {
  productName: string = '';
  productPrice: number | null = null;
  productQuantity: number | null = null;
  productList: Product[] = [];

  // Inject the service into the component
  constructor(private productService: ProductService) {}

  // Load the products from the service when the component initializes
  ngOnInit() {
    this.productList = this.productService.getProducts();
  }

  // Method to add a new product using the service
  addProduct() {
    if (this.productName && this.productPrice !== null && this.productQuantity !== null) {
      const newProduct: Product = {
        name: this.productName,
        price: this.productPrice,
        quantity: this.productQuantity
      };
      this.productService.addProduct(newProduct);  // Add the product via the service
      this.productList = this.productService.getProducts();  // Refresh the list
      this.clearInputs();
    }
  }

  clearInputs() {
    this.productName = '';
    this.productPrice = null;
    this.productQuantity = null;
  }
}
