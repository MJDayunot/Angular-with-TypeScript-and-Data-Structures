import { Component } from '@angular/core';  // Import Component

// Define an interface for the Vegetable structure
interface Vegetable {
  name: string;  // Name of the vegetable
  price: number;  // Price of the vegetable
}

@Component({
  selector: 'app-vegetable-list',  // Ensure this matches your HTML tag
  templateUrl: './vegetablelist.component.html',  // Path to the HTML file
  styleUrls: ['./vegetablelist.component.css']  // Path to the CSS file
})
export class VegetableListComponent {
  // Declare properties for vegetable details
  vegetableName: string = '';  // Variable to hold the vegetable name input
  vegetablePrice: number | null = null;  // Variable to hold the vegetable price input

  // Array to hold the list of vegetables
  vegetableList: Vegetable[] = [
    { name: 'Carrot', price: 1.5 },

  ];

  // Method to add a new vegetable to the list
  addVegetable() {
    if (this.vegetableName && this.vegetablePrice !== null) {
      const newVegetable: Vegetable = {
        name: this.vegetableName,
        price: this.vegetablePrice
      };
      this.vegetableList.push(newVegetable);  // Add the new vegetable to the list
      this.clearInputs();  // Clear the input fields after adding the vegetable
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.vegetableName = '';
    this.vegetablePrice = null;
  }
}
