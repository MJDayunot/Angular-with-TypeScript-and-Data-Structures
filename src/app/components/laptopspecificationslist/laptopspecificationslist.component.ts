import { Component } from '@angular/core';  // Import Component

// Define an interface for the Laptop Specification structure
interface LaptopSpecification {
  model: string;            // Model of the laptop
  processor: string;        // Processor type
  ram: string;              // RAM size
  storage: string;          // Storage capacity
  display: string;          // Display size
}

@Component({
  selector: 'app-laptop-specifications-list',  // Ensure this matches your HTML tag
  templateUrl: './laptopspecificationslist.component.html',  // Path to the HTML file
  styleUrls: ['./laptopspecificationslist.component.css']  // Path to the CSS file
})
export class LaptopSpecificationsListComponent {
  // Declare properties for laptop specifications
  laptopModel: string = '';           // Variable to hold the laptop model input
  laptopProcessor: string = '';       // Variable to hold the laptop processor input
  laptopRam: string = '';             // Variable to hold the laptop RAM input
  laptopStorage: string = '';         // Variable to hold the laptop storage input
  laptopDisplay: string = '';         // Variable to hold the laptop display size input

  // Array to hold the list of laptop specifications
  laptopSpecificationsList: LaptopSpecification[] = [
    { model: 'XPS 13', processor: 'Intel i7', ram: '16GB', storage: '512GB SSD', display: '13.3-inch' },

  ];

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
      this.laptopSpecificationsList.push(newSpecification);  // Add the new specification to the list
      this.clearInputs();  // Clear the input fields after adding the specification
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
