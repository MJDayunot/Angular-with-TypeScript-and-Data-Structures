import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-list',  // Ensure this matches your HTML tag
  templateUrl: './mealplanlist.component.html',  // Path to the HTML file
  styleUrls: ['./mealplanlist.component.css']  // Path to the CSS file
})
export class MealPlanListComponent {
  mealName: string = '';  // Variable to hold the meal name input
  mealPlan: string[] = [    // Array to hold the list of meals
    'Breakfast: Oatmeal with Fruits',

  ];

  // Method to add a new meal to the list
  addMeal() {
    if (this.mealName) {
      this.mealPlan.push(this.mealName);  // Add the new meal to the list
      this.clearInput();  // Clear the input field after adding the meal
    }
  }

  // Method to clear the input field
  clearInput() {
    this.mealName = '';
  }
}
