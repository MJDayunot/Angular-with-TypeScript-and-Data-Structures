import { Component } from '@angular/core';
import { FrameworkService } from '../../services/frameworklist.service'; // Adjust the import path as needed

interface Framework {
  name: string;
  description: string;
}

@Component({
  selector: 'app-framework-list',
  templateUrl: './frameworklist.component.html',
  styleUrls: ['./frameworklist.component.css']
})
export class FrameworkListComponent {
  frameworkName: string = '';  // Variable to hold the framework name input
  frameworkDescription: string = '';  // Variable to hold the framework description input
  frameworkList: Framework[] = [];  // Array to hold the list of web development frameworks

  constructor(private frameworkService: FrameworkService) {
    this.frameworkList = this.frameworkService.getFrameworkList(); // Fetch initial framework list from the service
  }

  // Method to add a new framework to the list
  addFramework() {
    if (this.frameworkName && this.frameworkDescription) {
      this.frameworkService.addFramework({ name: this.frameworkName, description: this.frameworkDescription }); // Use the service to add the framework
      this.clearInput();  // Clear the input fields after adding the framework
      this.frameworkList = this.frameworkService.getFrameworkList(); // Refresh the list
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.frameworkName = '';
    this.frameworkDescription = '';
  }
}
