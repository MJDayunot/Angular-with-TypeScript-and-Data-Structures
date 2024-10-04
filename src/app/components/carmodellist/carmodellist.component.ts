import { Component } from '@angular/core';  // Import Component

// Define an interface for the Car Model structure
interface CarModel {
  make: string;          // Make of the car (e.g., Toyota, Ford)
  model: string;         // Model of the car (e.g., Camry, Mustang)
  year: number;         // Release year of the car model
}

@Component({
  selector: 'app-car-model-list',  // Ensure this matches your HTML tag
  templateUrl: './carmodellist.component.html',  // Path to the HTML file
  styleUrls: ['./carmodellist.component.css']  // Path to the CSS file
})
export class CarModelListComponent {
  // Declare properties for car model details
  carMake: string = '';    // Variable to hold the car make input
  carModel: string = '';    // Variable to hold the car model input
  carYear: number | null = null;  // Variable to hold the car release year input

  // Array to hold the list of car models
  carModelList: CarModel[] = [
    { make: 'Toyota', model: 'Camry', year: 2021 }

  ];

  // Method to add a new car model to the list
  addCarModel() {
    if (this.carMake && this.carModel && this.carYear !== null) {
      const newCarModel: CarModel = {
        make: this.carMake,
        model: this.carModel,
        year: this.carYear
      };
      this.carModelList.push(newCarModel);  // Add the new car model to the list
      this.clearInputs();  // Clear the input fields after adding the car model
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.carMake = '';
    this.carModel = '';
    this.carYear = null;  // Reset to null
  }
}
