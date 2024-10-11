import { Injectable } from '@angular/core';

// Define an interface for the Sport structure
export interface Sport {
  name: string;      // Name of the sport
  category: string;  // Category (e.g., team, individual)
}

@Injectable({
  providedIn: 'root'  // This makes the service available throughout the application
})
export class SportService {
  private sportsList: Sport[] = [
    { name: 'Soccer', category: 'Team' }
  ];

  // Method to get all sports
  getSports(): Sport[] {
    return this.sportsList;
  }

  // Method to add a new sport
  addSport(sport: Sport): void {
    this.sportsList.push(sport);
  }
}
