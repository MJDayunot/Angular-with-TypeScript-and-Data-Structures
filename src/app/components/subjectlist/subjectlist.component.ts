import { Component } from '@angular/core';
import { Subject, SubjectService } from '../../services/subjectlist.service';  // Import the service

@Component({
  selector: 'app-subject-list',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectListComponent {
  subjectName: string = '';
  subjectCode: string = '';
  subjectCredits: number | null = null;
  subjectList: Subject[] = [];  // Initialize the subjectList

  constructor(private subjectService: SubjectService) {
    this.subjectList = this.subjectService.getSubjects();  // Fetch subjects from the service
  }

  addSubject() {
    if (this.subjectName && this.subjectCode && this.subjectCredits !== null) {
      const newSubject: Subject = {
        name: this.subjectName,
        code: this.subjectCode,
        credits: this.subjectCredits
      };
      this.subjectService.addSubject(newSubject);  // Use service to add the subject
      this.clearInputs();  // Clear input fields
    }
  }

  clearInputs() {
    this.subjectName = '';
    this.subjectCode = '';
    this.subjectCredits = null;  // Reset to null
  }
}
