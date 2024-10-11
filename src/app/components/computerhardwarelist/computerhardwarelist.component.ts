import { Component } from '@angular/core';
import { ComputerHardwareService } from '../../services/computerhardwarelist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computerhardwarelist.component.html',
  styleUrls: ['./computerhardwarelist.component.css']
})
export class ComputerHardwareListComponent {
  hardwareComponent: string = '';  // Variable to hold the hardware component input
  hardwareList: string[] = [];      // Array to hold the list of computer components

  constructor(private computerHardwareService: ComputerHardwareService) {
    this.hardwareList = this.computerHardwareService.getHardwareList(); // Fetch initial hardware list from the service
  }

  // Method to add a new hardware component to the list
  addHardware() {
    if (this.hardwareComponent) {
      this.computerHardwareService.addHardware(this.hardwareComponent); // Use the service to add the component
      this.clearInput();  // Clear the input field after adding the component
      this.hardwareList = this.computerHardwareService.getHardwareList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.hardwareComponent = '';
  }
}
