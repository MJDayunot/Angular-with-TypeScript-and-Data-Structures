import { Component } from '@angular/core';
import { DestinationService, Destination } from '../../services/destinationlist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-destination-list',
  templateUrl: './destinationlist.component.html',
  styleUrls: ['./destinationlist.component.css']
})
export class DestinationListComponent {
  destinationName: string = '';          // Variable to hold the destination name input
  destinationCountry: string = '';       // Variable to hold the destination country input
  destinationAttractions: string = '';    // Variable to hold the destination attractions input
  destinationList: Destination[] = [];   // Initialize as an empty array

  constructor(private destinationService: DestinationService) {
    this.destinationList = this.destinationService.getDestinations(); // Fetch items from the service
  }

  // Method to add a new destination to the list
  addDestination() {
    if (this.destinationName && this.destinationCountry && this.destinationAttractions) {
      const newDestination: Destination = {
        name: this.destinationName,
        country: this.destinationCountry,
        attractions: this.destinationAttractions,
      };
      this.destinationService.addDestination(newDestination); // Use the service to add the destination
      this.clearInputs();  // Clear the input fields after adding the destination
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.destinationName = '';
    this.destinationCountry = '';
    this.destinationAttractions = '';
  }
}
