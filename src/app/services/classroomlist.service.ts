import { Injectable } from '@angular/core';

export interface Student {
  name: string;      
  roomNumber: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private studentList: Student[] = [
    { name: 'John Doe', roomNumber: '101' },
  ];

  // Method to get the list of students
  getStudents(): Student[] {
    return this.studentList;
  }

  // Method to add a new student to the list
  addStudent(student: Student) {
    this.studentList.push(student);
  }
}
