import { Component } from '@angular/core';
import { StudentlistService } from '../../services/studentlist.service';


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
  studentList: Student[] = [];

  constructor(private studentListService: StudentlistService) {}

  ngOnInit() {
    // Load students from the service
    this.studentList = this.studentListService.getStudents();
  }

  addStudent() {
    if (this.studentName && this.studentAge !== null && this.studentGrade) {
      const newStudent: Student = {
        name: this.studentName,
        age: this.studentAge,
        grade: this.studentGrade,
      };
      this.studentListService.addStudent(newStudent); // Use service to add the student
      this.studentList = this.studentListService.getStudents(); // Refresh the list
      this.clearInputs();
    }
  }

  clearInputs() {
    this.studentName = '';
    this.studentAge = null;
    this.studentGrade = '';
  }
}
