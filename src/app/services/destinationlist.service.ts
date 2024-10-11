// destination.service.ts
import { Injectable } from '@angular/core';

export interface Destination {
  name: string;        // Name of the destination
  country: string;     // Country of the destination
  attractions: string; // Main attractions at the destination
}

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinationList: Destination[] = [
    { name: 'Paris', country: 'France', attractions: 'Eiffel Tower, Louvre Museum' },
  ];

  // Method to get the list of destinations
  getDestinations(): Destination[] {
    return this.destinationList;
  }

  // Method to add a new destination to the list
  addDestination(destination: Destination) {
    this.destinationList.push(destination);
  }
}
