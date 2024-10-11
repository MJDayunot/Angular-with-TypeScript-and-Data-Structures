import { Injectable } from '@angular/core';

interface CarModel {
  make: string;  // Make of the car (e.g., Toyota, Ford)
  model: string; // Model of the car (e.g., Camry, Mustang)
  year: number;  // Release year of the car model
}

@Injectable({
  providedIn: 'root',
})
export class CarModelService {
  // List of car models
  private carModelList: CarModel[] = [
    { make: 'Toyota', model: 'Camry', year: 2021 }
  ];

  // Method to get the list of car models
  getCarModels(): CarModel[] {
    return this.carModelList;
  }

  // Method to add a new car model to the list
  addCarModel(carModel: CarModel): void {
    this.carModelList.push(carModel);
  }
}
