import { Component } from '@angular/core';
import { FlowerService, Flower } from '../../services/flowerlist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-flower-list',
  templateUrl: './flowerlist.component.html',
  styleUrls: ['./flowerlist.component.css']
})
export class FlowerListComponent {
  flowerName: string = '';           // Variable to hold the flower name input
  flowerColor: string = '';          // Variable to hold the flower color input
  flowerQuantity: number | null = null; // Variable to hold the flower quantity input
  flowerList: Flower[] = [];         // Initialize as an empty array

  constructor(private flowerService: FlowerService) {
    this.flowerList = this.flowerService.getFlowers(); // Fetch items from the service
  }

  // Method to add a new flower to the list
  addFlower() {
    if (this.flowerName && this.flowerColor && this.flowerQuantity !== null) {
      const newFlower: Flower = {
        name: this.flowerName,
        color: this.flowerColor,
        quantity: this.flowerQuantity,
      };
      this.flowerService.addFlower(newFlower); // Use the service to add the flower
      this.clearInputs();  // Clear the input fields after adding the flower
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.flowerName = '';
    this.flowerColor = '';
    this.flowerQuantity = null;
  }
}
