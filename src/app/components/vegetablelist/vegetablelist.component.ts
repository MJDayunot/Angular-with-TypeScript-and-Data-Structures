import { Component } from '@angular/core';
import { Vegetable, VegetableService } from '../../services/vegetablelist.service'; // Ensure this path is correct

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetablelist.component.html',
  styleUrls: ['./vegetablelist.component.css']
})
export class VegetableListComponent {
  vegetableName: string = '';      // Variable to hold the vegetable name input
  vegetablePrice: number | null = null;  // Variable to hold the vegetable price input
  vegetableList: Vegetable[] = [];  // Initialize the vegetable list

  constructor(private vegetableService: VegetableService) {
    this.vegetableList = this.vegetableService.getVegetables();  // Fetch vegetables from the service
  }

  addVegetable() {
    if (this.vegetableName && this.vegetablePrice !== null) {
      const newVegetable: Vegetable = {
        name: this.vegetableName,
        price: this.vegetablePrice
      };
      this.vegetableService.addVegetable(newVegetable);  // Use the service to add the vegetable
      this.clearInputs();  // Clear input fields
    }
  }

  clearInputs() {
    this.vegetableName = '';
    this.vegetablePrice = null;
  }
}
