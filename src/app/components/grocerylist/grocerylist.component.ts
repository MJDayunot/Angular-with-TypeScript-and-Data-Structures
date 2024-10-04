import { Component } from '@angular/core';  // Import Component

// Define an interface for the Grocery Item structure
interface GroceryItem {
  name: string;      // Name of the grocery item
  quantity: number;  // Quantity of the grocery item
  price: number;     // Price of the grocery item
}

@Component({
  selector: 'app-grocery-list',  // Ensure this matches your HTML tag
  templateUrl: './grocerylist.component.html',  // Path to the HTML file
  styleUrls: ['./grocerylist.component.css']  // Path to the CSS file
})
export class GroceryListComponent {
  // Declare properties for grocery item details
  itemName: string = '';          // Variable to hold the grocery item name input
  itemQuantity: number | null = null;  // Variable to hold the grocery item quantity input
  itemPrice: number | null = null;     // Variable to hold the grocery item price input

  // Array to hold the list of grocery items
  groceryList: GroceryItem[] = [
    { name: 'Apples', quantity: 2, price: 3.99 },

  ];

  // Method to add a new grocery item to the list
  addGroceryItem() {
    if (this.itemName && this.itemQuantity !== null && this.itemPrice !== null) {
      const newGroceryItem: GroceryItem = {
        name: this.itemName,
        quantity: this.itemQuantity,
        price: this.itemPrice,
      };
      this.groceryList.push(newGroceryItem);  // Add the new grocery item to the list
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
