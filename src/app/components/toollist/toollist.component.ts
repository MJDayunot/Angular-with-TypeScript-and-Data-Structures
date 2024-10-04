import { Component } from '@angular/core';  // Import Component

// Define an interface for the Tool structure
interface Tool {
  name: string;  // Name of the tool
  type: string;  // Type of the tool
}

@Component({
  selector: 'app-tool-list',  // Ensure this matches your HTML tag
  templateUrl: './toollist.component.html',  // Path to the HTML file
  styleUrls: ['./toollist.component.css']  // Path to the CSS file
})
export class ToolListComponent {
  // Declare properties for tool details
  toolName: string = '';      // Variable to hold the tool name input
  toolType: string = '';      // Variable to hold the type input

  // Array to hold the list of tools
  toolList: Tool[] = [
    { name: 'Hammer', type: 'Hand Tool' },
  ];

  // Method to add a new tool to the list
  addTool() {
    if (this.toolName && this.toolType) {
      const newTool: Tool = {
        name: this.toolName,
        type: this.toolType
      };
      this.toolList.push(newTool);  // Add the new tool to the list
      this.clearInputs();  // Clear the input fields after adding the tool
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.toolName = '';
    this.toolType = '';
  }
}
