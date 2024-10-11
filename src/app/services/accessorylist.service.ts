import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessoryService {
  private accessoryList: string[] = [
    'Phone Case',
  ];

 
  getAccessoryList(): string[] {
    return this.accessoryList;
  }

  // Method to add a new accessory to the list
  addAccessory(accessory: string) {
    this.accessoryList.push(accessory);
  }
}
