import { Component } from '@angular/core';
import { DeveloperToolsService } from '../../services/developertoolslist.service'; // Adjust the import path as needed

interface DeveloperTool {
  name: string;
  description: string;
}

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developertoolslist.component.html',
  styleUrls: ['./developertoolslist.component.css']
})
export class DeveloperToolsListComponent {
  toolName: string = '';  // Variable to hold the tool name input
  toolDescription: string = '';  // Variable to hold the tool description input
  developerToolsList: DeveloperTool[] = [];  // Array to hold the list of developer tools

  constructor(private developerToolsService: DeveloperToolsService) {
    this.developerToolsList = this.developerToolsService.getDeveloperToolsList(); // Fetch initial developer tools list from the service
  }

  // Method to add a new developer tool to the list
  addTool() {
    if (this.toolName && this.toolDescription) {
      this.developerToolsService.addTool({ name: this.toolName, description: this.toolDescription }); // Use the service to add the tool
      this.clearInput();  // Clear the input fields after adding the tool
      this.developerToolsList = this.developerToolsService.getDeveloperToolsList(); // Refresh the list
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.toolName = '';
    this.toolDescription = '';
  }
}
