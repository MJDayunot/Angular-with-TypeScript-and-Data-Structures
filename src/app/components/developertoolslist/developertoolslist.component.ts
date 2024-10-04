import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-tools-list',  // Ensure this matches your HTML tag
  templateUrl: './developertoolslist.component.html',  // Path to the HTML file
  styleUrls: ['./developertoolslist.component.css']  // Path to the CSS file
})
export class DeveloperToolsListComponent {
  toolName: string = '';  // Variable to hold the tool name input
  toolDescription: string = '';  // Variable to hold the tool description input

  // Array to hold the list of developer tools
  developerToolsList: { name: string; description: string }[] = [
    { name: 'Visual Studio Code', description: 'A popular code editor with extensions.' },

  ];

  // Method to add a new developer tool to the list
  addTool() {
    if (this.toolName && this.toolDescription) {
      this.developerToolsList.push({ name: this.toolName, description: this.toolDescription });  // Add the new tool to the list
      this.clearInput();  // Clear the input fields after adding the tool
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.toolName = '';
    this.toolDescription = '';
  }
}
