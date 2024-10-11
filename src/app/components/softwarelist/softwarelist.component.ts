import { Component } from '@angular/core';
import { Software, SoftwareService } from '../../services/softwarelist.service'; // Correct import path

@Component({
  selector: 'app-software-list',
  templateUrl: './softwarelist.component.html',
  styleUrls: ['./softwarelist.component.css']
})
export class SoftwareListComponent {
  softwareName: string = '';                   // Variable to hold the software name input
  softwareVersion: string = '';                 // Variable to hold the software version input
  softwareInstalledYear: number | null = null;  // Variable to hold the installed year input (nullable)

  softwareList: Software[] = [];                // Initialize the software list

  constructor(private softwareService: SoftwareService) {
    this.softwareList = this.softwareService.getSoftware(); // Fetch software from the service
  }

  // Method to add new software to the list
  addSoftware() {
    if (this.softwareName && this.softwareVersion && this.softwareInstalledYear) {
      const newSoftware: Software = {
        name: this.softwareName,
        version: this.softwareVersion,
        installedYear: this.softwareInstalledYear
      };
      this.softwareService.addSoftware(newSoftware); // Use the service to add the software
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
