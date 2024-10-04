import { Component } from '@angular/core';
// Import FormsModule
// Import CommonModule

interface Student {
  name: string;
  age: number;
  grade: string;
}

@Component({
  selector: 'app-student-list',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
})
export class StudentListComponent {
  studentName: string = '';
  studentAge: number | null = null;
  studentGrade: string = '';

  studentList: Student[] = [
    { name: 'John Doe', age: 16, grade: 'Grade 10' }
  ];

  addStudent() {
    if (this.studentName && this.studentAge !== null && this.studentGrade) {
      const newStudent: Student = {
        name: this.studentName,
        age: this.studentAge,
        grade: this.studentGrade
      };
      this.studentList.push(newStudent);
      this.clearInputs();
    }
  }

  clearInputs() {
    this.studentName = '';
    this.studentAge = null;
    this.studentGrade = '';
  }
}
