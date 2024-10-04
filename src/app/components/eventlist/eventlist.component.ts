import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',  // Ensure this matches your HTML tag
  templateUrl: './eventlist.component.html',  // Path to the HTML file
  styleUrls: ['./eventlist.component.css']  // Path to the CSS file
})
export class EventListComponent {
  eventName: string = '';  // Variable to hold the event name input
  eventDate: string = '';  // Variable to hold the event date input
  eventLocation: string = '';  // Variable to hold the event location input

  // Array to hold the list of upcoming events
  eventList: { name: string; date: string; location: string }[] = [
    { name: 'Music Festival', date: '2024-11-05', location: 'Central Park' },
  ];

  // Method to add a new event to the list
  addEvent() {
    if (this.eventName && this.eventDate && this.eventLocation) {
      this.eventList.push({ name: this.eventName, date: this.eventDate, location: this.eventLocation });  // Add the new event to the list
      this.clearInput();  // Clear the input fields after adding the event
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.eventName = '';
    this.eventDate = '';
    this.eventLocation = '';
  }
}
