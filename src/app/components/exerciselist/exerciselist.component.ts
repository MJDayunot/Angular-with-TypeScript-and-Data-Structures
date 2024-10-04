import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise-list',  // Ensure this matches your HTML tag
  templateUrl: './exerciselist.component.html',  // Path to the HTML file
  styleUrls: ['./exerciselist.component.css']  // Path to the CSS file
})
export class ExerciseListComponent {
  exerciseName: string = '';  // Variable to hold the exercise name input
  exerciseList: string[] = [    // Array to hold the list of exercises
    'Push-ups',
  ];

  // Method to add a new exercise to the list
  addExercise() {
    if (this.exerciseName) {
      this.exerciseList.push(this.exerciseName);  // Add the new exercise to the list
      this.clearInput();  // Clear the input field after adding the exercise
    }
  }

  // Method to clear the input field
  clearInput() {
    this.exerciseName = '';
  }
}
