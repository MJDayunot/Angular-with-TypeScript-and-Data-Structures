// lecture.service.ts
import { Injectable } from '@angular/core';

export interface Lecture {
  topic: string;       // Topic of the lecture
  date: string;        // Date of the lecture
  duration: number;    // Duration of the lecture in minutes
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
