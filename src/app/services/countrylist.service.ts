import { Injectable } from '@angular/core';

// Define an interface for the Country structure
export interface Country {
  name: string;       
  continent: string;  
}

@Injectable({
  providedIn: 'root'  
})
export class CountryService {
  private countryList: Country[] = [
    { name: 'United States', continent: 'North America' }
  ];

  // Method to get all countries
  getCountries(): Country[] {
    return this.countryList;
  }

  // Method to add a new country
  addCountry(country: Country): void {
    this.countryList.push(country);
  }
}
