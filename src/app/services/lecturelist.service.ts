import { Injectable } from '@angular/core';

export interface Lecture {
  topic: string;       
  date: string;       
  duration: number;   
}

@Injectable({
  providedIn: 'root'
})
export class LectureService {
  private lectureList: Lecture[] = [
    { topic: 'Introduction to Angular', date: '2024-10-05', duration: 60 },
  ];

  // Method to get the list of lectures
  getLectures(): Lecture[] {
    return this.lectureList;
  }

  // Method to add a new lecture to the list
  addLecture(lecture: Lecture) {
    this.lectureList.push(lecture);
  }
}
