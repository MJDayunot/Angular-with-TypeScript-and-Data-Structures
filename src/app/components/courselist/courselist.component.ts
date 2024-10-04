import { Component } from '@angular/core';  // Import Component

// Define an interface for the Course structure
interface Course {
  title: string;
  code: string;
  duration: number;  // Duration in hours
}

@Component({
  selector: 'app-course-list',  // Ensure this matches your HTML tag
  templateUrl: './courselist.component.html',  // Path to the HTML file
  styleUrls: ['./courselist.component.css']  // Path to the CSS file
})
export class CourseListComponent {
  // Declare properties for course details
  courseTitle: string = '';  // Variable to hold the course title input
  courseCode: string = '';  // Variable to hold the course code input
  courseDuration: number | null = null;  // Variable to hold the course duration input

  // Array to hold the list of courses
  courseList: Course[] = [
    { title: 'Mathematics', code: 'MATH101', duration: 40 }
  ];

  // Method to add a new course to the list
  addCourse() {
    if (this.courseTitle && this.courseCode && this.courseDuration !== null) {
      const newCourse: Course = {
        title: this.courseTitle,
        code: this.courseCode,
        duration: this.courseDuration
      };
      this.courseList.push(newCourse);  // Add the new course to the list
      this.clearInputs();  // Clear the input fields after adding the course
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.courseTitle = '';
    this.courseCode = '';
    this.courseDuration = null;  // Reset to null
  }
}
