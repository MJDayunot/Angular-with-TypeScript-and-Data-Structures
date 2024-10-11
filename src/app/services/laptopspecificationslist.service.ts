// laptop-specifications.service.ts
import { Injectable } from '@angular/core';

// Define the interface for laptop specifications
interface LaptopSpecification {
  model: string;
  processor: string;
  ram: string;
  storage: string;
  display: string;
}

@Injectable({
  providedIn: 'root'
})
export class LaptopSpecificationsService {
  private laptopSpecificationsList: LaptopSpecification[] = [
    { model: 'XPS 13', processor: 'Intel i7', ram: '16GB', storage: '512GB SSD', display: '13.3-inch' },
  ];

  // Method to get the list of laptop specifications
  getSpecifications(): LaptopSpecification[] {
    return this.laptopSpecificationsList;
  }

  // Method to add a new laptop specification to the list
  addSpecification(specification: LaptopSpecification) {
    this.laptopSpecificationsList.push(specification);
  }
}
