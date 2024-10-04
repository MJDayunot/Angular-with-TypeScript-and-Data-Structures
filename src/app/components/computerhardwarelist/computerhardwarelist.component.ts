import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-hardware-list',  // Ensure this matches your HTML tag
  templateUrl: './computerhardwarelist.component.html',  // Path to the HTML file
  styleUrls: ['./computerhardwarelist.component.css']  // Path to the CSS file
})
export class ComputerHardwareListComponent {
  hardwareComponent: string = '';  // Variable to hold the hardware component input
  hardwareList: string[] = [        // Array to hold the list of computer components
    'CPU',

  ];

  // Method to add a new hardware component to the list
  addHardware() {
    if (this.hardwareComponent) {
      this.hardwareList.push(this.hardwareComponent);  // Add the new component to the list
      this.clearInput();  // Clear the input field after adding the component
    }
  }

  // Method to clear the input field
  clearInput() {
    this.hardwareComponent = '';
  }
}
