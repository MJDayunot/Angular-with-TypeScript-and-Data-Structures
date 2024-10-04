import { Component } from '@angular/core';  // Import Component

// Define an interface for the Sport structure
interface Sport {
  name: string;  // Name of the sport
  category: string;  // Category (e.g., team, individual)
}

@Component({
  selector: 'app-sports-list',  // Ensure this matches your HTML tag
  templateUrl: './sportslist.component.html',  // Path to the HTML file
  styleUrls: ['./sportslist.component.css']  // Path to the CSS file
})
export class SportsListComponent {
  // Declare properties for sport details
  sportName: string = '';      // Variable to hold the sport name input
  sportCategory: string = '';  // Variable to hold the category input

  // Array to hold the list of sports
  sportsList: Sport[] = [
    { name: 'Soccer', category: 'Team' },

  ];

  // Method to add a new sport to the list
  addSport() {
    if (this.sportName && this.sportCategory) {
      const newSport: Sport = {
        name: this.sportName,
        category: this.sportCategory
      };
      this.sportsList.push(newSport);  // Add the new sport to the list
      this.clearInputs();  // Clear the input fields after adding the sport
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.sportName = '';
    this.sportCategory = '';
  }
}
