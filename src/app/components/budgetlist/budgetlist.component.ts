import { Component } from '@angular/core';
import { BudgetService } from '../../services/budgetlist.service'; // Adjust the import path as needed

interface BudgetItem {
  name: string;
  amount: number;
}

@Component({
  selector: 'app-budget-list',
  templateUrl: './budgetlist.component.html',
  styleUrls: ['./budgetlist.component.css']
})
export class BudgetListComponent {
  itemName: string = '';  // Variable to hold the budget item name input
  itemAmount: number | null = null;  // Variable to hold the budget item amount
  budgetList: BudgetItem[] = [];  // Array to hold the list of budget items

  constructor(private budgetService: BudgetService) {
    this.budgetList = this.budgetService.getBudgetList(); // Fetch initial budget list from the service
  }

  // Method to add a new budget item to the list
  addBudgetItem() {
    if (this.itemName && this.itemAmount !== null) {
      const newItem: BudgetItem = { name: this.itemName, amount: this.itemAmount };
      this.budgetService.addBudgetItem(newItem); // Use the service to add the budget item
      this.clearInput();  // Clear the input fields after adding the budget item
      this.budgetList = this.budgetService.getBudgetList(); // Refresh the list
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.itemName = '';
    this.itemAmount = null;  // Reset the amount field
  }
}
