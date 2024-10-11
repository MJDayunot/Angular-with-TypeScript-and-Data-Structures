import { Component } from '@angular/core';
import { FruitlistService } from '../../services/fruitlist.service';  // Import the service

interface Fruit {
  name: string;
  color: string;
  pricePerKg: number;
}

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruitlist.component.html',
  styleUrls: ['./fruitlist.component.css']
})
export class FruitListComponent {
  fruitName: string = '';
  fruitColor: string = '';
  fruitPricePerKg: number | null = null;
  fruitList: Fruit[] = [];

  // Inject the service into the component
  constructor(private fruitlistService: FruitlistService) {}

  // Load the fruits from the service when the component initializes
  ngOnInit() {
    this.fruitList = this.fruitlistService.getFruits();
  }

  // Method to add a new fruit using the service
  addFruit() {
    if (this.fruitName && this.fruitColor && this.fruitPricePerKg !== null) {
      const newFruit: Fruit = {
        name: this.fruitName,
        color: this.fruitColor,
        pricePerKg: this.fruitPricePerKg
      };
      this.fruitlistService.addFruit(newFruit);  // Add the fruit via the service
      this.fruitList = this.fruitlistService.getFruits();  // Refresh the list
      this.clearInputs();
    }
  }

  clearInputs() {
    this.fruitName = '';
    this.fruitColor = '';
    this.fruitPricePerKg = null;
  }
}
