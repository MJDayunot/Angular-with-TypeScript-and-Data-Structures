import { Injectable } from '@angular/core';

export interface Flower {
  name: string;        
  color: string;       
  quantity: number;    
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
