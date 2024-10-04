import { Component } from '@angular/core';  // Import Component

// Define an interface for the Destination structure
interface Destination {
  name: string;        // Name of the destination
  country: string;     // Country of the destination
  attractions: string; // Main attractions at the destination
}

@Component({
  selector: 'app-destination-list',  // Ensure this matches your HTML tag
  templateUrl: './destinationlist.component.html',  // Path to the HTML file
  styleUrls: ['./destinationlist.component.css']  // Path to the CSS file
})
export class DestinationListComponent {
  // Declare properties for destination details
  destinationName: string = '';          // Variable to hold the destination name input
  destinationCountry: string = '';       // Variable to hold the destination country input
  destinationAttractions: string = '';    // Variable to hold the destination attractions input

  // Array to hold the list of destinations
  destinationList: Destination[] = [
    { name: 'Paris', country: 'France', attractions: 'Eiffel Tower, Louvre Museum' },
  ];

  // Method to add a new destination to the list
  addDestination() {
    if (this.destinationName && this.destinationCountry && this.destinationAttractions) {
      const newDestination: Destination = {
        name: this.destinationName,
        country: this.destinationCountry,
        attractions: this.destinationAttractions,
      };
      this.destinationList.push(newDestination);  // Add the new destination to the list
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
