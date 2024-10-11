import { Component } from '@angular/core';
import { ClassroomService, Student } from '../../services/classroomlist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroomlist.component.html',
  styleUrls: ['./classroomlist.component.css']
})
export class ClassroomListComponent {
  studentName: string = '';  // Variable to hold the student name input
  roomNumber: string = '';    // Variable to hold the room number input
  studentList: Student[] = []; // Initialize as an empty array

  constructor(private classroomService: ClassroomService) {
    this.studentList = this.classroomService.getStudents(); // Fetch students from the service
  }

  // Method to add a new student to the list
  addStudent() {
    if (this.studentName && this.roomNumber) {
      const newStudent: Student = {
        name: this.studentName,
        roomNumber: this.roomNumber,
      };
      this.classroomService.addStudent(newStudent); // Use the service to add the student
      this.clearInput();  // Clear the input fields after adding the student
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.studentName = '';
    this.roomNumber = '';
  }
}
