import { Component } from '@angular/core';
import { BuildingService } from '../../services/buildinglist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-building-list',
  templateUrl: './buildinglist.component.html',
  styleUrls: ['./buildinglist.component.css']
})
export class BuildingListComponent {
  buildingName: string = '';  // Variable to hold the building name input
  buildingList: string[] = [];  // Array to hold the list of buildings

  constructor(private buildingService: BuildingService) {
    this.buildingList = this.buildingService.getBuildingList(); // Fetch initial building list from the service
  }

  // Method to add a new building to the list
  addBuilding() {
    if (this.buildingName) {
      this.buildingService.addBuilding(this.buildingName); // Use the service to add the building
      this.clearInput();  // Clear the input field after adding the building
      this.buildingList = this.buildingService.getBuildingList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.buildingName = '';
  }
}
