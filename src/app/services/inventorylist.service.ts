import { Injectable } from '@angular/core';

export interface InventoryItem {
  name: string;     
  quantity: number; 
  price: number;    
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
