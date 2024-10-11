import { Component } from '@angular/core';
import { EventService } from '../../services/eventlist.service'; // Adjust the import path as needed

interface Event {
  name: string;
  date: string;
  location: string;
}

@Component({
  selector: 'app-event-list',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventListComponent {
  eventName: string = '';  // Variable to hold the event name input
  eventDate: string = '';  // Variable to hold the event date input
  eventLocation: string = '';  // Variable to hold the event location input
  eventList: Event[] = [];  // Array to hold the list of upcoming events

  constructor(private eventService: EventService) {
    this.eventList = this.eventService.getEventList(); // Fetch initial event list from the service
  }

  // Method to add a new event to the list
  addEvent() {
    if (this.eventName && this.eventDate && this.eventLocation) {
      this.eventService.addEvent({ name: this.eventName, date: this.eventDate, location: this.eventLocation }); // Use the service to add the event
      this.clearInput();  // Clear the input fields after adding the event
      this.eventList = this.eventService.getEventList(); // Refresh the list
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.eventName = '';
    this.eventDate = '';
    this.eventLocation = '';
  }
}
