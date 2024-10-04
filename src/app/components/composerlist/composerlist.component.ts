import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',  // Ensure this matches your HTML tag
  templateUrl: './composerlist.component.html',  // Path to the HTML file
  styleUrls: ['./composerlist.component.css']  // Path to the CSS file
})
export class ComposerListComponent {
  composerName: string = '';  // Variable to hold the composer name input
  composerList: string[] = [   // Array to hold the list of composers
    'Ludwig van Beethoven',
  ];

  // Method to add a new composer to the list
  addComposer() {
    if (this.composerName) {
      this.composerList.push(this.composerName);  // Add the new composer to the list
      this.clearInput();  // Clear the input field after adding the composer
    }
  }

  // Method to clear the input field
  clearInput() {
    this.composerName = '';
  }
}
