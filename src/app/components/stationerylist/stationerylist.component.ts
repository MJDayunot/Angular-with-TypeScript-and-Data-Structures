import { Component } from '@angular/core';
import { StationeryService, StationeryItem } from '../../services/stationerylist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationerylist.component.html',
  styleUrls: ['./stationerylist.component.css']
})
export class StationeryListComponent {
  itemName: string = '';          // Variable to hold the stationery item name input
  itemQuantity: number | null = null; // Variable to hold the stationery item quantity input
  itemPrice: number | null = null;    // Variable to hold the stationery item price input
  stationeryList: StationeryItem[] = []; // Initialize as an empty array

  constructor(private stationeryService: StationeryService) {
    this.stationeryList = this.stationeryService.getStationeryItems(); // Fetch items from the service
  }

  // Method to add a new stationery item to the list
  addStationeryItem() {
    if (this.itemName && this.itemQuantity !== null && this.itemPrice !== null) {
      const newItem: StationeryItem = {
        name: this.itemName,
        quantity: this.itemQuantity,
        price: this.itemPrice,
      };
      this.stationeryService.addStationeryItem(newItem); // Use the service to add the item
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
