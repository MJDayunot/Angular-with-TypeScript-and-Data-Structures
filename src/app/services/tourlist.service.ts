import { Injectable } from '@angular/core';

interface Tour {
  date: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private tourList: Tour[] = [
    { date: '2024-11-01', location: 'Los Angeles, CA' },
  ];

  // Method to get the list of tours
  getTourList(): Tour[] {
    return this.tourList;
  }

  // Method to add a new tour to the list
  addTour(tour: Tour) {
    this.tourList.push(tour);
  }
}
