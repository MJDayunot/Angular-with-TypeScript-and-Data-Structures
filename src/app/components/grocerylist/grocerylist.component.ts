import { Component } from '@angular/core';
import { GroceryItem, GroceryService } from '../../services/grocerylist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GroceryListComponent {
  // Declare properties for grocery item details
  itemName: string = '';            // Variable to hold the grocery item name input
  itemQuantity: number | null = null; // Variable to hold the grocery item quantity input
  itemPrice: number | null = null;    // Variable to hold the grocery item price input

  // Array to hold the list of grocery items
  groceryList: GroceryItem[] = []; // Initialize as an empty array

  constructor(private groceryService: GroceryService) {
    this.groceryList = this.groceryService.getGroceryItems(); // Fetch grocery items from the service
  }

  // Method to add a new grocery item to the list
  addGroceryItem() {
    if (this.itemName && this.itemQuantity !== null && this.itemPrice !== null) {
      const newGroceryItem: GroceryItem = {
        name: this.itemName,
        quantity: this.itemQuantity,
        price: this.itemPrice,
      };
      this.groceryService.addGroceryItem(newGroceryItem); // Use the service to add the grocery item
      this.clearInputs();  // Clear the input fields after adding the grocery item
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.itemName = '';
    this.itemQuantity = null;
    this.itemPrice = null;
  }
}
