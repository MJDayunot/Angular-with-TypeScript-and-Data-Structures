import { Component } from '@angular/core';

@Component({
  selector: 'app-painting-list',  // Ensure this matches your HTML tag
  templateUrl: './paintinglist.component.html',  // Path to the HTML file
  styleUrls: ['./paintinglist.component.css']  // Path to the CSS file
})
export class PaintingListComponent {
  paintingName: string = '';  // Variable to hold the painting name input
  paintingList: string[] = [   // Array to hold the list of paintings
    'Mona Lisa',
  ];

  // Method to add a new painting to the list
  addPainting() {
    if (this.paintingName) {
      this.paintingList.push(this.paintingName);  // Add the new painting to the list
      this.clearInput();  // Clear the input field after adding the painting
    }
  }

  // Method to clear the input field
  clearInput() {
    this.paintingName = '';
  }
}
