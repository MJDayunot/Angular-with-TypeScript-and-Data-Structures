import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private furnitureList: string[] = [
    'Sofa',
  ];

  // Method to get the list of furniture items
  getFurnitureList(): string[] {
    return this.furnitureList;
  }

  // Method to add a new furniture item to the list
  addFurniture(furniture: string) {
    this.furnitureList.push(furniture);
  }
}
