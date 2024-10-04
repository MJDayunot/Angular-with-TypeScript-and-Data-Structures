import { Component } from '@angular/core';  // Import Component

// Define an interface for the Stationery structure
interface StationeryItem {
  name: string;       // Name of the stationery item
  quantity: number;    // Quantity of the stationery item
  price: number;       // Price of the stationery item
}

@Component({
  selector: 'app-stationery-list',  // Ensure this matches your HTML tag
  templateUrl: './stationerylist.component.html',  // Path to the HTML file
  styleUrls: ['./stationerylist.component.css']  // Path to the CSS file
})
export class StationeryListComponent {
  // Declare properties for stationery item details
  itemName: string = '';          // Variable to hold the stationery item name input
  itemQuantity: number | null = null; // Variable to hold the stationery item quantity input
  itemPrice: number | null = null;    // Variable to hold the stationery item price input

  // Array to hold the list of stationery items
  stationeryList: StationeryItem[] = [
    { name: 'Notebook', quantity: 20, price: 1.50 },

  ];

  // Method to add a new stationery item to the list
  addStationeryItem() {
    if (this.itemName && this.itemQuantity !== null && this.itemPrice !== null) {
      const newItem: StationeryItem = {
        name: this.itemName,
        quantity: this.itemQuantity,
        price: this.itemPrice,
      };
      this.stationeryList.push(newItem);  // Add the new stationery item to the list
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
