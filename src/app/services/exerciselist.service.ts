import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exerciseList: string[] = [
    'Push-ups',
  ];

  
  getExerciseList(): string[] {
    return this.exerciseList;
  }

  // Method to add a new exercise to the list
  addExercise(exercise: string) {
    this.exerciseList.push(exercise);
  }
}
