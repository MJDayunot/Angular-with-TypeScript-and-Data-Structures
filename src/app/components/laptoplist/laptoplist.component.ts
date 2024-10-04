import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',  // Ensure this matches your HTML tag
  templateUrl: './laptoplist.component.html',  // Path to the HTML file
  styleUrls: ['./laptoplist.component.css']  // Path to the CSS file
})
export class LaptopListComponent {
  laptopModel: string = '';  // Variable to hold the laptop model input
  laptopList: string[] = [   // Array to hold the list of laptop models
    'MacBook Pro',
  ];

  // Method to add a new laptop model to the list
  addLaptop() {
    if (this.laptopModel) {
      this.laptopList.push(this.laptopModel);  // Add the new model to the list
      this.clearInput();  // Clear the input field after adding the model
    }
  }

  // Method to clear the input field
  clearInput() {
    this.laptopModel = '';
  }
}
