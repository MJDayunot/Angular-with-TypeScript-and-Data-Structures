import { Injectable } from '@angular/core';

interface DeveloperTool {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeveloperToolsService {
  private developerToolsList: DeveloperTool[] = [
    { name: 'Visual Studio Code', description: 'A popular code editor with extensions.' },
  ];

  // Method to get the list of developer tools
  getDeveloperToolsList(): DeveloperTool[] {
    return this.developerToolsList;
  }

  // Method to add a new developer tool to the list
  addTool(tool: DeveloperTool) {
    this.developerToolsList.push(tool);
  }
}
