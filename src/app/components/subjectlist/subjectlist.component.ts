import { Component } from '@angular/core';  // Import Component

// Define an interface for the Subject structure
interface Subject {
  name: string;      // Name of the subject
  code: string;      // Subject code (e.g., MATH101)
  credits: number;   // Number of credits for the subject
}

@Component({
  selector: 'app-subject-list',  // Ensure this matches your HTML tag
  templateUrl: './subjectlist.component.html',  // Path to the HTML file
  styleUrls: ['./subjectlist.component.css']  // Path to the CSS file
})
export class SubjectListComponent {
  // Declare properties for subject details
  subjectName: string = '';      // Variable to hold the subject name input
  subjectCode: string = '';      // Variable to hold the subject code input
  subjectCredits: number | null = null;  // Variable to hold the subject credits input

  // Array to hold the list of subjects
  subjectList: Subject[] = [
    { name: 'Mathematics', code: 'MATH101', credits: 3 }

  ];

  // Method to add a new subject to the list
  addSubject() {
    if (this.subjectName && this.subjectCode && this.subjectCredits !== null) {
      const newSubject: Subject = {
        name: this.subjectName,
        code: this.subjectCode,
        credits: this.subjectCredits
      };
      this.subjectList.push(newSubject);  // Add the new subject to the list
      this.clearInputs();  // Clear the input fields after adding the subject
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.subjectName = '';
    this.subjectCode = '';
    this.subjectCredits = null;  // Reset to null
  }
}
