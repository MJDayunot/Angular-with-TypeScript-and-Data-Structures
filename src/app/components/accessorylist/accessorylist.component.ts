import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',  // Ensure this matches your HTML tag
  templateUrl: './accessorylist.component.html',  // Path to the HTML file
  styleUrls: ['./accessorylist.component.css']  // Path to the CSS file
})
export class AccessoryListComponent {
  accessoryName: string = '';  // Variable to hold the accessory name input
  accessoryList: string[] = [   // Array to hold the list of accessories
    'Phone Case',

  ];

  // Method to add a new accessory to the list
  addAccessory() {
    if (this.accessoryName) {
      this.accessoryList.push(this.accessoryName);  // Add the new accessory to the list
      this.clearInput();  // Clear the input field after adding the accessory
    }
  }

  // Method to clear the input field
  clearInput() {
    this.accessoryName = '';
  }
}
