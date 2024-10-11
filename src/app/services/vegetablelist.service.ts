// vegetable.service.ts
import { Injectable } from '@angular/core';

export interface Vegetable {
  name: string;  // Name of the vegetable
  price: number; // Price of the vegetable
}

@Injectable({
  providedIn: 'root'
})
export class VegetableService {
  private vegetableList: Vegetable[] = [
    { name: 'Carrot', price: 1.5 },
  ];

  // Method to get the list of vegetables
  getVegetables(): Vegetable[] {
    return this.vegetableList;
  }

  // Method to add a vegetable to the list
  addVegetable(vegetable: Vegetable) {
    this.vegetableList.push(vegetable);
  }
}
