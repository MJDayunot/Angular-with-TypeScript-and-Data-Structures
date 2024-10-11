import { Component } from '@angular/core';
import { LectureService, Lecture } from '../../services/lecturelist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecturelist.component.html',
  styleUrls: ['./lecturelist.component.css']
})
export class LectureListComponent {
  lectureTopic: string = '';         // Variable to hold the lecture topic input
  lectureDate: string = '';          // Variable to hold the lecture date input
  lectureDuration: number | null = null; // Variable to hold the lecture duration input
  lectureList: Lecture[] = []; // Initialize as an empty array

  constructor(private lectureService: LectureService) {
    this.lectureList = this.lectureService.getLectures(); // Fetch lectures from the service
  }

  // Method to add a new lecture to the list
  addLecture() {
    if (this.lectureTopic && this.lectureDate && this.lectureDuration !== null) {
      const newLecture: Lecture = {
        topic: this.lectureTopic,
        date: this.lectureDate,
        duration: this.lectureDuration,
      };
      this.lectureService.addLecture(newLecture); // Use the service to add the lecture
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
