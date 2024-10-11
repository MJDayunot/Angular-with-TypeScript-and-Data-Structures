import { Injectable } from '@angular/core';

interface City {
  name: string;
  country: string;
  population: number;  
}

@Injectable({
  providedIn: 'root',
})
export class CitylistService {
  
  private cityList: City[] = [
    { name: 'New York', country: 'USA', population: 8419600 }
  ];

  // Method to get the list of cities
  getCities(): City[] {
    return this.cityList;
  }

  // Method to add a new city to the list
  addCity(city: City): void {
    this.cityList.push(city);
  }
}
