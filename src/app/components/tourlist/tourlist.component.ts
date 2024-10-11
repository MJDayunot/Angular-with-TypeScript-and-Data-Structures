import { Component } from '@angular/core';
import { TourService } from '../../services/tourlist.service'; // Adjust the import path as needed

interface Tour {
  date: string;
  location: string;
}

@Component({
  selector: 'app-tour-list',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourListComponent {
  tourDate: string = '';  // Variable to hold the tour date input
  tourLocation: string = '';  // Variable to hold the tour location input
  tourList: Tour[] = [];  // Array to hold the list of tour dates and locations

  constructor(private tourService: TourService) {
    this.tourList = this.tourService.getTourList(); // Fetch initial tour list from the service
  }

  // Method to add a new tour date and location to the list
  addTour() {
    if (this.tourDate && this.tourLocation) {
      this.tourService.addTour({ date: this.tourDate, location: this.tourLocation }); // Use the service to add the tour
      this.clearInput();  // Clear the input fields after adding the tour
      this.tourList = this.tourService.getTourList(); // Refresh the list
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.tourDate = '';
    this.tourLocation = '';
  }
}
