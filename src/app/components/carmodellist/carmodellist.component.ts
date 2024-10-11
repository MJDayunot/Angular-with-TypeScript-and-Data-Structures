import { Component, OnInit } from '@angular/core';
import { CarModelService } from '../../services/carmodellist.service';  // Import the service

interface CarModel {
  make: string;  // Make of the car (e.g., Toyota, Ford)
  model: string; // Model of the car (e.g., Camry, Mustang)
  year: number;  // Release year of the car model
}

@Component({
  selector: 'app-car-model-list',
  templateUrl: './carmodellist.component.html',
  styleUrls: ['./carmodellist.component.css']
})
export class CarModelListComponent implements OnInit {
  carMake: string = '';
  carModel: string = '';
  carYear: number | null = null;
  carModelList: CarModel[] = [];

  // Inject the service into the component
  constructor(private carModelService: CarModelService) {}

  // Load the car models from the service when the component initializes
  ngOnInit() {
    this.carModelList = this.carModelService.getCarModels();
  }

  // Method to add a new car model using the service
  addCarModel() {
    if (this.carMake && this.carModel && this.carYear !== null) {
      const newCarModel: CarModel = {
        make: this.carMake,
        model: this.carModel,
        year: this.carYear
      };
      this.carModelService.addCarModel(newCarModel);  // Add the car model via the service
      this.carModelList = this.carModelService.getCarModels();  // Refresh the list
      this.clearInputs();
    }
  }

  clearInputs() {
    this.carMake = '';
    this.carModel = '';
    this.carYear = null;
  }
}
