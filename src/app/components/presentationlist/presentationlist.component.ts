import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-list',  // Ensure this matches your HTML tag
  templateUrl: './presentationlist.component.html',  // Path to the HTML file
  styleUrls: ['./presentationlist.component.css']  // Path to the CSS file
})
export class PresentationListComponent {
  topicName: string = '';  // Variable to hold the presentation topic input
  presentationList: string[] = [  // Array to hold the list of presentation topics
    'The Impact of Climate Change',

  ];

  // Method to add a new presentation topic to the list
  addTopic() {
    if (this.topicName) {
      this.presentationList.push(this.topicName);  // Add the new topic to the list
      this.clearInput();  // Clear the input field after adding the topic
    }
  }

  // Method to clear the input field
  clearInput() {
    this.topicName = '';
  }
}
