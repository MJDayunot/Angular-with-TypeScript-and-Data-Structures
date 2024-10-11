// grocery.service.ts
import { Injectable } from '@angular/core';

export interface GroceryItem {
  name: string;      // Name of the grocery item
  quantity: number;  // Quantity of the grocery item
  price: number;     // Price of the grocery item
}

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private groceryList: GroceryItem[] = [
    { name: 'Apples', quantity: 2, price: 3.99 },
  ];

  // Method to get the list of grocery items
  getGroceryItems(): GroceryItem[] {
    return this.groceryList;
  }

  // Method to add a new grocery item to the list
  addGroceryItem(groceryItem: GroceryItem) {
    this.groceryList.push(groceryItem);
  }
}
