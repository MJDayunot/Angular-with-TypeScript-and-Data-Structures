import { Component } from '@angular/core';
import { LaptopService } from '../../services/laptoplist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptoplist.component.html',
  styleUrls: ['./laptoplist.component.css']
})
export class LaptopListComponent {
  laptopModel: string = '';  // Variable to hold the laptop model input
  laptopList: string[] = [];  // Initialize as an empty array

  constructor(private laptopService: LaptopService) {
    this.laptopList = this.laptopService.getLaptops(); // Fetch initial laptop models from the service
  }

  // Method to add a new laptop model to the list
  addLaptop() {
    if (this.laptopModel) {
      this.laptopService.addLaptop(this.laptopModel); // Use the service to add the laptop model
      this.clearInput();  // Clear the input field after adding the model
      this.laptopList = this.laptopService.getLaptops(); // Refresh the laptop list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.laptopModel = '';
  }
}
