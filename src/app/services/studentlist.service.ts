import { Injectable } from '@angular/core';

interface Student {
  name: string;
  age: number;
  grade: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentlistService {
  private studentList: Student[] = [
    { name: 'John Doe', age: 16, grade: 'Grade 10' }
  ];

  // Get all students
  getStudents(): Student[] {
    return this.studentList;
  }

  // Add a new student
  addStudent(student: Student): void {
    this.studentList.push(student);
  }

  
  clearStudents(): void {
    this.studentList = [];
  }
}
