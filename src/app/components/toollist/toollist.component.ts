import { Component } from '@angular/core';
import { Tool, ToolService } from '../../services/toollist.service'; // Correct import path

@Component({
  selector: 'app-tool-list',
  templateUrl: './toollist.component.html',
  styleUrls: ['./toollist.component.css']
})
export class ToolListComponent {
  toolName: string = '';        // Variable to hold the tool name input
  toolType: string = '';        // Variable to hold the type input
  toolList: Tool[] = [];        // Initialize the tool list

  constructor(private toolService: ToolService) {
    this.toolList = this.toolService.getTools(); // Fetch tools from the service
  }

  // Method to add a new tool to the list
  addTool() {
    if (this.toolName && this.toolType) {
      const newTool: Tool = {
        name: this.toolName,
        type: this.toolType
      };
      this.toolService.addTool(newTool); // Use the service to add the tool
      this.clearInputs(); // Clear input fields
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.toolName = '';
    this.toolType = '';
  }
}
