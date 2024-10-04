import { Component } from '@angular/core';  // Import Component

// Define an interface for the Country structure
interface Country {
  name: string;       // Name of the country
  continent: string;  // Continent the country belongs to
}

@Component({
  selector: 'app-country-list',  // Ensure this matches your HTML tag
  templateUrl: './countrylist.component.html',  // Path to the HTML file
  styleUrls: ['./countrylist.component.css']  // Path to the CSS file
})
export class CountryListComponent {
  // Declare properties for country details
  countryName: string = '';      // Variable to hold the country name input
  countryContinent: string = '';  // Variable to hold the continent input

  // Array to hold the list of countries
  countryList: Country[] = [
    { name: 'United States', continent: 'North America' }
  ];

  // Method to add a new country to the list
  addCountry() {
    if (this.countryName && this.countryContinent) {
      const newCountry: Country = {
        name: this.countryName,
        continent: this.countryContinent
      };
      this.countryList.push(newCountry);  // Add the new country to the list
      this.clearInputs();  // Clear the input fields after adding the country
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.countryName = '';
    this.countryContinent = '';
  }
}
