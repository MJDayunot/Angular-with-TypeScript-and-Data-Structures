import { Component } from '@angular/core';
import { InventoryService, InventoryItem } from '../../services/inventorylist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.css']
})
export class InventoryListComponent {
  itemName: string = '';          // Variable to hold the inventory item name input
  itemQuantity: number | null = null; // Variable to hold the inventory item quantity input
  itemPrice: number | null = null;    // Variable to hold the inventory item price input
  inventoryList: InventoryItem[] = []; // Initialize as an empty array

  constructor(private inventoryService: InventoryService) {
    this.inventoryList = this.inventoryService.getInventoryItems(); // Fetch inventory items from the service
  }

  // Method to add a new inventory item to the list
  addInventoryItem() {
    if (this.itemName && this.itemQuantity !== null && this.itemPrice !== null) {
      const newItem: InventoryItem = {
        name: this.itemName,
        quantity: this.itemQuantity,
        price: this.itemPrice,
      };
      this.inventoryService.addInventoryItem(newItem); // Use the service to add the item
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
