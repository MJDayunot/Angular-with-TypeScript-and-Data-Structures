import { Component } from '@angular/core';  // Import Component

// Define an interface for the Flower structure
interface Flower {
  name: string;        // Name of the flower
  color: string;       // Color of the flower
  quantity: number;    // Quantity of the flower
}

@Component({
  selector: 'app-flower-list',  // Ensure this matches your HTML tag
  templateUrl: './flowerlist.component.html',  // Path to the HTML file
  styleUrls: ['./flowerlist.component.css']  // Path to the CSS file
})
export class FlowerListComponent {
  // Declare properties for flower details
  flowerName: string = '';           // Variable to hold the flower name input
  flowerColor: string = '';          // Variable to hold the flower color input
  flowerQuantity: number | null = null; // Variable to hold the flower quantity input

  // Array to hold the list of flowers
  flowerList: Flower[] = [
    { name: 'Roses', color: 'Red', quantity: 12 },
  ];

  // Method to add a new flower to the list
  addFlower() {
    if (this.flowerName && this.flowerColor && this.flowerQuantity !== null) {
      const newFlower: Flower = {
        name: this.flowerName,
        color: this.flowerColor,
        quantity: this.flowerQuantity,
      };
      this.flowerList.push(newFlower);  // Add the new flower to the list
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
