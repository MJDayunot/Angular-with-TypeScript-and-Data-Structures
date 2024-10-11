import { Injectable } from '@angular/core';

interface Product {
  name: string;      
  price: number;     
  quantity: number;  
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // List of products
  private productList: Product[] = [
    { name: 'Laptop', price: 1200, quantity: 10 }
  ];

  // Method to get the list of products
  getProducts(): Product[] {
    return this.productList;
  }

  // Method to add a new product to the list
  addProduct(product: Product): void {
    this.productList.push(product);
  }
}
