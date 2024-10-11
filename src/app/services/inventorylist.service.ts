// inventory.service.ts
import { Injectable } from '@angular/core';

export interface InventoryItem {
  name: string;     // Name of the inventory item
  quantity: number; // Quantity of the inventory item
  price: number;    // Price of the inventory item
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private inventoryList: InventoryItem[] = [
    { name: 'Laptop', quantity: 5, price: 999.99 },
  ];

  // Method to get the list of inventory items
  getInventoryItems(): InventoryItem[] {
    return this.inventoryList;
  }

  // Method to add a new inventory item to the list
  addInventoryItem(item: InventoryItem) {
    this.inventoryList.push(item);
  }
}
