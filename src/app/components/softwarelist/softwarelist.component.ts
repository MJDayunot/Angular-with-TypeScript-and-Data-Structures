import { Component } from '@angular/core';  // Import Component

// Define an interface for the Software structure
interface Software {
  name: string;  // Name of the software
  version: string;  // Version of the software
  installedYear: number;  // Year the software was installed
}

@Component({
  selector: 'app-software-list',  // Ensure this matches your HTML tag
  templateUrl: './softwarelist.component.html',  // Path to the HTML file
  styleUrls: ['./softwarelist.component.css']  // Path to the CSS file
})
export class SoftwareListComponent {
  // Declare properties for software details
  softwareName: string = '';      // Variable to hold the software name input
  softwareVersion: string = '';    // Variable to hold the software version input
  softwareInstalledYear: number | null = null;  // Variable to hold the installed year input (nullable)

  // Array to hold the list of software installed
  softwareList: Software[] = [
    { name: 'Visual Studio Code', version: '1.66.0', installedYear: 2021 },

  ];

  // Method to add new software to the list
  addSoftware() {
    if (this.softwareName && this.softwareVersion && this.softwareInstalledYear) {
      const newSoftware: Software = {
        name: this.softwareName,
        version: this.softwareVersion,
        installedYear: this.softwareInstalledYear
      };
      this.softwareList.push(newSoftware);  // Add the new software to the list
      this.clearInputs();  // Clear the input fields after adding the software
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.softwareName = '';
    this.softwareVersion = '';
    this.softwareInstalledYear = null;
  }
}
