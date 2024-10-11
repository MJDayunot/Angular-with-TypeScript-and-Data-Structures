// food.service.ts
import { Injectable } from '@angular/core';

export interface FoodItem {
  name: string;           // Name of the food item
  description: string;    // Description of the food item
  price: number;          // Price of the food item
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodList: FoodItem[] = [
    { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.', price: 12.99 },
  ];

  // Method to get the list of food items
  getFoodItems(): FoodItem[] {
    return this.foodList;
  }

  // Method to add a new food item to the list
  addFoodItem(foodItem: FoodItem) {
    this.foodList.push(foodItem);
  }
}
