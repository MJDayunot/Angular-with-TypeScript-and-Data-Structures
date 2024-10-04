import { Component } from '@angular/core';

@Component({
  selector: 'app-budget-list',  // Ensure this matches your HTML tag
  templateUrl: './budgetlist.component.html',  // Path to the HTML file
  styleUrls: ['./budgetlist.component.css']  // Path to the CSS file
})
export class BudgetListComponent {
  itemName: string = '';  // Variable to hold the budget item name input
  itemAmount: number | null = null;  // Variable to hold the budget item amount
  budgetList: { name: string; amount: number }[] = [  // Array to hold the list of budget items
    { name: 'Office Supplies', amount: 150 },
  ];

  // Method to add a new budget item to the list
  addBudgetItem() {
    if (this.itemName && this.itemAmount) {
      this.budgetList.push({ name: this.itemName, amount: this.itemAmount });  // Add the new budget item to the list
      this.clearInput();  // Clear the input fields after adding the budget item
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.itemName = '';
    this.itemAmount = null;  // Reset the amount field
  }
}
