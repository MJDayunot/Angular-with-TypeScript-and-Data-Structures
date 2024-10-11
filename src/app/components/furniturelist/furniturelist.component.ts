import { Component } from '@angular/core';
import { FurnitureService } from '../../services/furniturelist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniturelist.component.html',
  styleUrls: ['./furniturelist.component.css']
})
export class FurnitureListComponent {
  furnitureName: string = '';  // Variable to hold the furniture name input
  furnitureList: string[] = [];  // Array to hold the list of furniture items

  constructor(private furnitureService: FurnitureService) {
    this.furnitureList = this.furnitureService.getFurnitureList(); // Fetch initial furniture list from the service
  }

  // Method to add a new furniture item to the list
  addFurniture() {
    if (this.furnitureName) {
      this.furnitureService.addFurniture(this.furnitureName); // Use the service to add the furniture
      this.clearInput();  // Clear the input field after adding the furniture
      this.furnitureList = this.furnitureService.getFurnitureList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.furnitureName = '';
  }
}
