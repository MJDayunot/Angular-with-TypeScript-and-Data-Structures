import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',  // Ensure this matches your HTML tag
  templateUrl: './furniturelist.component.html',  // Path to the HTML file
  styleUrls: ['./furniturelist.component.css']  // Path to the CSS file
})
export class FurnitureListComponent {
  furnitureName: string = '';  // Variable to hold the furniture name input
  furnitureList: string[] = [   // Array to hold the list of furniture items
    'Sofa',
  ];

  // Method to add a new furniture item to the list
  addFurniture() {
    if (this.furnitureName) {
      this.furnitureList.push(this.furnitureName);  // Add the new furniture item to the list
      this.clearInput();  // Clear the input field after adding the furniture
    }
  }

  // Method to clear the input field
  clearInput() {
    this.furnitureName = '';
  }
}
