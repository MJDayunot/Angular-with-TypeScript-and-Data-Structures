import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-list',  // Ensure this matches your HTML tag
  templateUrl: './classroomlist.component.html',  // Path to the HTML file
  styleUrls: ['./classroomlist.component.css']  // Path to the CSS file
})
export class ClassroomListComponent {
  studentName: string = '';  // Variable to hold the student name input
  roomNumber: string = '';    // Variable to hold the room number input
  studentList: { name: string; roomNumber: string }[] = [  // Array to hold the list of students
    { name: 'John Doe', roomNumber: '101' },

  ];

  // Method to add a new student to the list
  addStudent() {
    if (this.studentName && this.roomNumber) {
      this.studentList.push({ name: this.studentName, roomNumber: this.roomNumber });  // Add the new student to the list
      this.clearInput();  // Clear the input fields after adding the student
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.studentName = '';
    this.roomNumber = '';
  }
}
