import { Component } from '@angular/core';  // Import Component

// Define an interface for the Product structure
interface Product {
  name: string;      // Name of the product
  price: number;     // Price of the product
  quantity: number;  // Quantity of the product in stock
}

@Component({
  selector: 'app-product-list',  // Ensure this matches your HTML tag
  templateUrl: './productlist.component.html',  // Path to the HTML file
  styleUrls: ['./productlist.component.css']  // Path to the CSS file
})
export class ProductListComponent {
  // Declare properties for product details
  productName: string = '';      // Variable to hold the product name input
  productPrice: number | null = null;  // Variable to hold the product price input
  productQuantity: number | null = null;  // Variable to hold the product quantity input

  // Array to hold the list of products
  productList: Product[] = [
    { name: 'Laptop', price: 1200, quantity: 10 }

  ];

  // Method to add a new product to the list
  addProduct() {
    if (this.productName && this.productPrice !== null && this.productQuantity !== null) {
      const newProduct: Product = {
        name: this.productName,
        price: this.productPrice,
        quantity: this.productQuantity
      };
      this.productList.push(newProduct);  // Add the new product to the list
      this.clearInputs();  // Clear the input fields after adding the product
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.productName = '';
    this.productPrice = null;  // Reset to null
    this.productQuantity = null;  // Reset to null
  }
}
