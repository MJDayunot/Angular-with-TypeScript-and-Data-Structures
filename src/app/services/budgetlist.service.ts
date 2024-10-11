import { Injectable } from '@angular/core';

interface BudgetItem {
  name: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private budgetList: BudgetItem[] = [
    { name: 'Office Supplies', amount: 150 },
  ];

  
  getBudgetList(): BudgetItem[] {
    return this.budgetList;
  }

  // Method to add a new budget item to the list
  addBudgetItem(item: BudgetItem) {
    this.budgetList.push(item);
  }
}
