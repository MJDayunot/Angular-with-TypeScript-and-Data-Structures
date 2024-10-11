// building.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  private buildingList: string[] = [
    'Library',
  ];

  // Method to get the list of buildings
  getBuildingList(): string[] {
    return this.buildingList;
  }

  // Method to add a new building to the list
  addBuilding(building: string) {
    this.buildingList.push(building);
  }
}
