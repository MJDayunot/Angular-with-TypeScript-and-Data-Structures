import { Component } from '@angular/core';
import { PaintingService } from '../../services/paintinglist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-painting-list',
  templateUrl: './paintinglist.component.html',
  styleUrls: ['./paintinglist.component.css']
})
export class PaintingListComponent {
  paintingName: string = '';  // Variable to hold the painting name input
  paintingList: string[] = [];  // Array to hold the list of paintings

  constructor(private paintingService: PaintingService) {
    this.paintingList = this.paintingService.getPaintingList(); // Fetch initial painting list from the service
  }

  // Method to add a new painting to the list
  addPainting() {
    if (this.paintingName) {
      this.paintingService.addPainting(this.paintingName); // Use the service to add the painting
      this.clearInput();  // Clear the input field after adding the painting
      this.paintingList = this.paintingService.getPaintingList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.paintingName = '';
  }
}
