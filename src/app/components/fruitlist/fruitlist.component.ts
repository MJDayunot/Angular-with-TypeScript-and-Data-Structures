import { Component } from '@angular/core';  // Import Component

// Define an interface for the Fruit structure
interface Fruit {
  name: string;
  color: string;
  pricePerKg: number;
}

@Component({
  selector: 'app-fruit-list',  // Ensure this matches your HTML tag
  templateUrl: './fruitlist.component.html',  // Path to the HTML file
  styleUrls: ['./fruitlist.component.css']  // Path to the CSS file
})
export class FruitListComponent {
  // Declare properties for fruit details
  fruitName: string = '';  // Variable to hold the fruit name input
  fruitColor: string = '';  // Variable to hold the fruit color input
  fruitPricePerKg: number | null = null;  // Variable to hold the fruit price input

  // Array to hold the list of fruits
  fruitList: Fruit[] = [
    { name: 'Apple', color: 'Red', pricePerKg: 100 }
  ];

  // Method to add a new fruit to the list
  addFruit() {
    if (this.fruitName && this.fruitColor && this.fruitPricePerKg !== null) {
      const newFruit: Fruit = {
        name: this.fruitName,
        color: this.fruitColor,
        pricePerKg: this.fruitPricePerKg
      };
      this.fruitList.push(newFruit);  // Add the new fruit to the list
      this.clearInputs();  // Clear the input fields after adding the fruit
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.fruitName = '';
    this.fruitColor = '';
    this.fruitPricePerKg = null;  // Reset to null
  }
}
