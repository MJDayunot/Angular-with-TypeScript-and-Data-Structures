import { Injectable } from '@angular/core';

interface Event {
  name: string;
  date: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventList: Event[] = [
    { name: 'Music Festival', date: '2024-11-05', location: 'Central Park' },
  ];

  
  getEventList(): Event[] {
    return this.eventList;
  }

  // Method to add a new event to the list
  addEvent(event: Event) {
    this.eventList.push(event);
  }
}
