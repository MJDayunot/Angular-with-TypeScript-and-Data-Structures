import { Injectable } from '@angular/core';

// Define an interface for the Subject structure
export interface Subject {
  name: string;      
  code: string;      
  credits: number;   
}

@Injectable({
  providedIn: 'root'  
})
export class SubjectService {
  private subjectList: Subject[] = [
    { name: 'Mathematics', code: 'MATH101', credits: 3 }
  ];

  // Method to get all subjects
  getSubjects(): Subject[] {
    return this.subjectList;
  }

  // Method to add a new subject
  addSubject(subject: Subject): void {
    this.subjectList.push(subject);
  }
}
