import { Component } from '@angular/core';  // Import Component

// Define an interface for the City structure
interface City {
  name: string;
  country: string;
  population: number;  // Population of the city
}

@Component({
  selector: 'app-citylist',  // Ensure this matches your HTML tag
  templateUrl: './citylist.component.html',  // Path to the HTML file
  styleUrls: ['./citylist.component.css']  // Path to the CSS file
})
export class CityListComponent {
  // Declare properties for city details
  cityName: string = '';  // Variable to hold the city name input
  cityCountry: string = '';  // Variable to hold the city country input
  cityPopulation: number | null = null;  // Variable to hold the city population input

  // Array to hold the list of cities
  cityList: City[] = [
    { name: 'New York', country: 'USA', population: 8419600 }

  ];

  // Method to add a new city to the list
  addCity() {
    if (this.cityName && this.cityCountry && this.cityPopulation !== null) {
      const newCity: City = {
        name: this.cityName,
        country: this.cityCountry,
        population: this.cityPopulation
      };
      this.cityList.push(newCity);  // Add the new city to the list
      this.clearInputs();  // Clear the input fields after adding the city
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.cityName = '';
    this.cityCountry = '';
    this.cityPopulation = null;  // Reset to null
  }
}
