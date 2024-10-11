import { Component } from '@angular/core';
import { MealPlanService } from '../../services/mealplanlist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './mealplanlist.component.html',
  styleUrls: ['./mealplanlist.component.css']
})
export class MealPlanListComponent {
  mealName: string = '';  // Variable to hold the meal name input
  mealPlan: string[] = []; // Array to hold the list of meals

  constructor(private mealPlanService: MealPlanService) {
    this.mealPlan = this.mealPlanService.getMealPlan(); // Fetch initial meal plan from the service
  }

  // Method to add a new meal to the list
  addMeal() {
    if (this.mealName) {
      this.mealPlanService.addMeal(this.mealName); // Use the service to add the meal
      this.clearInput();  // Clear the input field after adding the meal
      this.mealPlan = this.mealPlanService.getMealPlan(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.mealName = '';
  }
}
