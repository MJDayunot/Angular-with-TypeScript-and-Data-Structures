import { Component } from '@angular/core';
import { AccessoryService } from '../../services/accessorylist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessorylist.component.html',
  styleUrls: ['./accessorylist.component.css']
})
export class AccessoryListComponent {
  accessoryName: string = '';  // Variable to hold the accessory name input
  accessoryList: string[] = [];  // Array to hold the list of accessories

  constructor(private accessoryService: AccessoryService) {
    this.accessoryList = this.accessoryService.getAccessoryList(); // Fetch initial accessory list from the service
  }

  // Method to add a new accessory to the list
  addAccessory() {
    if (this.accessoryName) {
      this.accessoryService.addAccessory(this.accessoryName); // Use the service to add the accessory
      this.clearInput();  // Clear the input field after adding the accessory
      this.accessoryList = this.accessoryService.getAccessoryList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.accessoryName = '';
  }
}
