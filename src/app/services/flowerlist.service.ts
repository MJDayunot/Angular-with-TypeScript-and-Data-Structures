// flower.service.ts
import { Injectable } from '@angular/core';

export interface Flower {
  name: string;        // Name of the flower
  color: string;       // Color of the flower
  quantity: number;    // Quantity of the flower
}

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  private flowerList: Flower[] = [
    { name: 'Roses', color: 'Red', quantity: 12 },
  ];

  // Method to get the list of flowers
  getFlowers(): Flower[] {
    return this.flowerList;
  }

  // Method to add a new flower to the list
  addFlower(flower: Flower) {
    this.flowerList.push(flower);
  }
}
