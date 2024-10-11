import { Component } from '@angular/core';
import { PresentationService } from '../../services/presentationlist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentationlist.component.html',
  styleUrls: ['./presentationlist.component.css']
})
export class PresentationListComponent {
  topicName: string = '';  // Variable to hold the presentation topic input
  presentationList: string[] = [];  // Array to hold the list of presentation topics

  constructor(private presentationService: PresentationService) {
    this.presentationList = this.presentationService.getPresentationList(); // Fetch initial presentation list from the service
  }

  // Method to add a new presentation topic to the list
  addTopic() {
    if (this.topicName) {
      this.presentationService.addPresentationTopic(this.topicName); // Use the service to add the presentation topic
      this.clearInput();  // Clear the input field after adding the topic
      this.presentationList = this.presentationService.getPresentationList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.topicName = '';
  }
}
