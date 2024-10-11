import { Component } from '@angular/core';
import { Sport, SportService } from '../../services/sportslist.service';  // Import the service

@Component({
  selector: 'app-sports-list',
  templateUrl: './sportslist.component.html',
  styleUrls: ['./sportslist.component.css']
})
export class SportsListComponent {
  sportName: string = '';      // Variable to hold the sport name input
  sportCategory: string = '';  // Variable to hold the category input
  sportsList: Sport[] = [];    // Initialize the sports list

  constructor(private sportService: SportService) {
    this.sportsList = this.sportService.getSports();  // Fetch sports from the service
  }

  addSport() {
    if (this.sportName && this.sportCategory) {
      const newSport: Sport = {
        name: this.sportName,
        category: this.sportCategory
      };
      this.sportService.addSport(newSport);  // Use the service to add the sport
      this.clearInputs();  // Clear input fields
    }
  }

  clearInputs() {
    this.sportName = '';
    this.sportCategory = '';
  }
}
