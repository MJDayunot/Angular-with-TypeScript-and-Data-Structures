import { Injectable } from '@angular/core';

interface Fruit {
  name: string;
  color: string;
  pricePerKg: number;
}

@Injectable({
  providedIn: 'root',
})
export class FruitlistService {
  // List of fruits
  private fruitList: Fruit[] = [
    { name: 'Apple', color: 'Red', pricePerKg: 100 }
  ];

  // Method to get the list of fruits
  getFruits(): Fruit[] {
    return this.fruitList;
  }

  // Method to add a new fruit to the list
  addFruit(fruit: Fruit): void {
    this.fruitList.push(fruit);
  }
}
