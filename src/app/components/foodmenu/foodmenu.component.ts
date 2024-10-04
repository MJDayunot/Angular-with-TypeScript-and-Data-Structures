import { Component } from '@angular/core';  // Import Component

// Define an interface for the Food Item structure
interface FoodItem {
  name: string;  // Name of the food item
  description: string;  // Description of the food item
  price: number;  // Price of the food item
}

@Component({
  selector: 'app-food-menu',  // Ensure this matches your HTML tag
  templateUrl: './foodmenu.component.html',  // Path to the HTML file
  styleUrls: ['./foodmenu.component.css']  // Path to the CSS file
})
export class FoodMenuComponent {
  // Declare properties for food item details
  foodName: string = '';         // Variable to hold the food item name input
  foodDescription: string = '';  // Variable to hold the food item description input
  foodPrice: number | null = null; // Variable to hold the food item price input

  // Array to hold the list of food items
  foodList: FoodItem[] = [
    { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.', price: 12.99 },

  ];

  // Method to add a new food item to the list
  addFoodItem() {
    if (this.foodName && this.foodDescription && this.foodPrice !== null) {
      const newFoodItem: FoodItem = {
        name: this.foodName,
        description: this.foodDescription,
        price: this.foodPrice,
      };
      this.foodList.push(newFoodItem);  // Add the new food item to the list
      this.clearInputs();  // Clear the input fields after adding the food item
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.foodName = '';
    this.foodDescription = '';
    this.foodPrice = null;
  }
}
