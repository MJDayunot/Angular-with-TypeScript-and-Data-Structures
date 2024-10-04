import { Component } from '@angular/core';  // Import Component

// Define an interface for the Lecture structure
interface Lecture {
  topic: string;       // Topic of the lecture
  date: string;        // Date of the lecture
  duration: number;    // Duration of the lecture in minutes
}

@Component({
  selector: 'app-lecture-list',  // Ensure this matches your HTML tag
  templateUrl: './lecturelist.component.html',  // Path to the HTML file
  styleUrls: ['./lecturelist.component.css']  // Path to the CSS file
})
export class LectureListComponent {
  // Declare properties for lecture details
  lectureTopic: string = '';         // Variable to hold the lecture topic input
  lectureDate: string = '';          // Variable to hold the lecture date input
  lectureDuration: number | null = null; // Variable to hold the lecture duration input

  // Array to hold the list of lectures
  lectureList: Lecture[] = [
    { topic: 'Introduction to Angular', date: '2024-10-05', duration: 60 },

  ];

  // Method to add a new lecture to the list
  addLecture() {
    if (this.lectureTopic && this.lectureDate && this.lectureDuration !== null) {
      const newLecture: Lecture = {
        topic: this.lectureTopic,
        date: this.lectureDate,
        duration: this.lectureDuration,
      };
      this.lectureList.push(newLecture);  // Add the new lecture to the list
      this.clearInputs();  // Clear the input fields after adding the lecture
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.lectureTopic = '';
    this.lectureDate = '';
    this.lectureDuration = null;
  }
}
