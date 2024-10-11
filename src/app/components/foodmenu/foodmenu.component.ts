import { Component } from '@angular/core';
import { FoodItem, FoodService } from '../../services/foodmenu.service'; // Adjust the import path as needed

@Component({
  selector: 'app-food-menu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodMenuComponent {
  // Declare properties for food item details
  foodName: string = '';         // Variable to hold the food item name input
  foodDescription: string = '';  // Variable to hold the food item description input
  foodPrice: number | null = null; // Variable to hold the food item price input

  // Array to hold the list of food items
  foodList: FoodItem[] = [];     // Initialize as an empty array

  constructor(private foodService: FoodService) {
    this.foodList = this.foodService.getFoodItems(); // Fetch food items from the service
  }

  // Method to add a new food item to the list
  addFoodItem() {
    if (this.foodName && this.foodDescription && this.foodPrice !== null) {
      const newFoodItem: FoodItem = {
        name: this.foodName,
        description: this.foodDescription,
        price: this.foodPrice,
      };
      this.foodService.addFoodItem(newFoodItem); // Use the service to add the food item
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
