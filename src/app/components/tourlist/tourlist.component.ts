import { Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',  // Ensure this matches your HTML tag
  templateUrl: './tourlist.component.html',  // Path to the HTML file
  styleUrls: ['./tourlist.component.css']  // Path to the CSS file
})
export class TourListComponent {
  tourDate: string = '';  // Variable to hold the tour date input
  tourLocation: string = '';  // Variable to hold the tour location input
  tourList: { date: string; location: string }[] = [  // Array to hold the list of tour dates and locations
    { date: '2024-11-01', location: 'Los Angeles, CA' },
  ];

  // Method to add a new tour date and location to the list
  addTour() {
    if (this.tourDate && this.tourLocation) {
      this.tourList.push({ date: this.tourDate, location: this.tourLocation });  // Add the new tour to the list
      this.clearInput();  // Clear the input fields after adding the tour
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.tourDate = '';
    this.tourLocation = '';
  }
}
