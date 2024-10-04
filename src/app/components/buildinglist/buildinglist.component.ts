import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',  // Ensure this matches your HTML tag
  templateUrl: './buildinglist.component.html',  // Path to the HTML file
  styleUrls: ['./buildinglist.component.css']  // Path to the CSS file
})
export class BuildingListComponent {
  buildingName: string = '';  // Variable to hold the building name input
  buildingList: string[] = [   // Array to hold the list of buildings
    'Library',
  ];

  // Method to add a new building to the list
  addBuilding() {
    if (this.buildingName) {
      this.buildingList.push(this.buildingName);  // Add the new building to the list
      this.clearInput();  // Clear the input field after adding the building
    }
  }

  // Method to clear the input field
  clearInput() {
    this.buildingName = '';
  }
}
