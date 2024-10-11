import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealPlanService {
  private mealPlan: string[] = [
    'Breakfast: Oatmeal with Fruits',
  ];

  // Method to get the list of meals
  getMealPlan(): string[] {
    return this.mealPlan;
  }

  // Method to add a new meal to the list
  addMeal(meal: string) {
    this.mealPlan.push(meal);
  }
}
