import { Component } from '@angular/core';  // Import Component

// Define an interface for the Inventory Item structure
interface InventoryItem {
  name: string;     // Name of the inventory item
  quantity: number; // Quantity of the inventory item
  price: number;    // Price of the inventory item
}

@Component({
  selector: 'app-inventory-list',  // Ensure this matches your HTML tag
  templateUrl: './inventorylist.component.html',  // Path to the HTML file
  styleUrls: ['./inventorylist.component.css']  // Path to the CSS file
})
export class InventoryListComponent {
  // Declare properties for inventory item details
  itemName: string = '';          // Variable to hold the inventory item name input
  itemQuantity: number | null = null; // Variable to hold the inventory item quantity input
  itemPrice: number | null = null;    // Variable to hold the inventory item price input

  // Array to hold the list of inventory items
  inventoryList: InventoryItem[] = [
    { name: 'Laptop', quantity: 5, price: 999.99 },

  ];

  // Method to add a new inventory item to the list
  addInventoryItem() {
    if (this.itemName && this.itemQuantity !== null && this.itemPrice !== null) {
      const newItem: InventoryItem = {
        name: this.itemName,
        quantity: this.itemQuantity,
        price: this.itemPrice,
      };
      this.inventoryList.push(newItem);  // Add the new inventory item to the list
      this.clearInputs();  // Clear the input fields after adding the item
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.itemName = '';
    this.itemQuantity = null;
    this.itemPrice = null;
  }
}
