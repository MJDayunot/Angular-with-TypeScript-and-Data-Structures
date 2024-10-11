import { Injectable } from '@angular/core';

interface Course {
  title: string;
  code: string;
  duration: number;  
}

@Injectable({
  providedIn: 'root',
})
export class CourselistService {
  
  private courseList: Course[] = [
    { title: 'Mathematics', code: 'MATH101', duration: 40 }
  ];

  // Method to get the list of courses
  getCourses(): Course[] {
    return this.courseList;
  }

  // Method to add a new course to the list
  addCourse(course: Course): void {
    this.courseList.push(course);
  }
}
