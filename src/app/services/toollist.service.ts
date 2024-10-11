// tool.service.ts
import { Injectable } from '@angular/core';

export interface Tool {
  name: string;  
  type: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  private toolList: Tool[] = [
    { name: 'Hammer', type: 'Hand Tool' },
  ];

  // Method to get the list of tools
  getTools(): Tool[] {
    return this.toolList;
  }

  // Method to add a new tool to the list
  addTool(tool: Tool) {
    this.toolList.push(tool);
  }
}
