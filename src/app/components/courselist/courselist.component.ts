import { Component } from '@angular/core';
import { CourselistService } from '../../services/courselist.service';  // Import the service

interface Course {
  title: string;
  code: string;
  duration: number;
}

@Component({
  selector: 'app-course-list',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourseListComponent {
  courseTitle: string = '';
  courseCode: string = '';
  courseDuration: number | null = null;
  courseList: Course[] = [];

  // Inject the service into the component
  constructor(private courselistService: CourselistService) {}

  // Load the courses from the service when the component initializes
  ngOnInit() {
    this.courseList = this.courselistService.getCourses();
  }

  // Method to add a new course using the service
  addCourse() {
    if (this.courseTitle && this.courseCode && this.courseDuration !== null) {
      const newCourse: Course = {
        title: this.courseTitle,
        code: this.courseCode,
        duration: this.courseDuration
      };
      this.courselistService.addCourse(newCourse);  // Add the course via the service
      this.courseList = this.courselistService.getCourses();  // Refresh the list
      this.clearInputs();
    }
  }

  clearInputs() {
    this.courseTitle = '';
    this.courseCode = '';
    this.courseDuration = null;
  }
}
