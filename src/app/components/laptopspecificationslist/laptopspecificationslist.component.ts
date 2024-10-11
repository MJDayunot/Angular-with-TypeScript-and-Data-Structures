import { Component } from '@angular/core';
import { LaptopSpecificationsService } from '../../services/laptopspecificationslist.service'; // Adjust the import path as needed

// Define the interface for the Laptop Specification structure
interface LaptopSpecification {
  model: string;
  processor: string;
  ram: string;
  storage: string;
  display: string;
}

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptopspecificationslist.component.html',
  styleUrls: ['./laptopspecificationslist.component.css']
})
export class LaptopSpecificationsListComponent {
  // Declare properties for laptop specifications
  laptopModel: string = '';
  laptopProcessor: string = '';
  laptopRam: string = '';
  laptopStorage: string = '';
  laptopDisplay: string = '';

  // Array to hold the list of laptop specifications
  laptopSpecificationsList: LaptopSpecification[] = [];

  constructor(private laptopSpecificationsService: LaptopSpecificationsService) {
    this.laptopSpecificationsList = this.laptopSpecificationsService.getSpecifications(); // Fetch initial specifications from the service
  }

  // Method to add a new laptop specification to the list
  addSpecification() {
    if (this.laptopModel && this.laptopProcessor && this.laptopRam && this.laptopStorage && this.laptopDisplay) {
      const newSpecification: LaptopSpecification = {
        model: this.laptopModel,
        processor: this.laptopProcessor,
        ram: this.laptopRam,
        storage: this.laptopStorage,
        display: this.laptopDisplay,
      };
      this.laptopSpecificationsService.addSpecification(newSpecification); // Use the service to add the specification
      this.clearInputs();  // Clear the input fields after adding the specification
      this.laptopSpecificationsList = this.laptopSpecificationsService.getSpecifications(); // Refresh the list
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.laptopModel = '';
    this.laptopProcessor = '';
    this.laptopRam = '';
    this.laptopStorage = '';
    this.laptopDisplay = '';
  }
}
