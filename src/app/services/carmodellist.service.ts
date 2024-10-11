import { Injectable } from '@angular/core';

interface CarModel {
  make: string;  
  model: string; 
  year: number;  
}

@Injectable({
  providedIn: 'root',
})
export class CarModelService {
  
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
