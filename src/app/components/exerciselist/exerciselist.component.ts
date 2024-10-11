import { Component } from '@angular/core';
import { ExerciseService } from '../../services/exerciselist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exerciselist.component.html',
  styleUrls: ['./exerciselist.component.css']
})
export class ExerciseListComponent {
  exerciseName: string = '';  // Variable to hold the exercise name input
  exerciseList: string[] = [];  // Array to hold the list of exercises

  constructor(private exerciseService: ExerciseService) {
    this.exerciseList = this.exerciseService.getExerciseList(); // Fetch initial exercise list from the service
  }

  // Method to add a new exercise to the list
  addExercise() {
    if (this.exerciseName) {
      this.exerciseService.addExercise(this.exerciseName); // Use the service to add the exercise
      this.clearInput();  // Clear the input field after adding the exercise
      this.exerciseList = this.exerciseService.getExerciseList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.exerciseName = '';
  }
}
