import { Component, OnInit } from '@angular/core';
import { CitylistService } from '../../services/citylist.service';  // Import the service

interface City {
  name: string;
  country: string;
  population: number;
}

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CityListComponent implements OnInit {
  cityName: string = '';
  cityCountry: string = '';
  cityPopulation: number | null = null;
  cityList: City[] = [];

  // Inject the service into the component
  constructor(private citylistService: CitylistService) {}

  // Load the cities from the service when the component initializes
  ngOnInit() {
    this.cityList = this.citylistService.getCities();
  }

  // Method to add a new city using the service
  addCity() {
    if (this.cityName && this.cityCountry && this.cityPopulation !== null) {
      const newCity: City = {
        name: this.cityName,
        country: this.cityCountry,
        population: this.cityPopulation
      };
      this.citylistService.addCity(newCity);  // Add the city via the service
      this.cityList = this.citylistService.getCities();  // Refresh the list
      this.clearInputs();
    }
  }

  clearInputs() {
    this.cityName = '';
    this.cityCountry = '';
    this.cityPopulation = null;
  }
}
