import { Component } from '@angular/core';
import { Country, CountryService } from '../../services/countrylist.service';  // Import the service

@Component({
  selector: 'app-country-list',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountryListComponent {
  countryName: string = '';       // Variable to hold the country name input
  countryContinent: string = '';   // Variable to hold the continent input
  countryList: Country[] = [];     // Initialize the country list

  constructor(private countryService: CountryService) {
    this.countryList = this.countryService.getCountries();  // Fetch countries from the service
  }

  addCountry() {
    if (this.countryName && this.countryContinent) {
      const newCountry: Country = {
        name: this.countryName,
        continent: this.countryContinent
      };
      this.countryService.addCountry(newCountry);  // Use the service to add the country
      this.clearInputs();  // Clear input fields
    }
  }

  clearInputs() {
    this.countryName = '';
    this.countryContinent = '';
  }
}
