import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',  // Ensure this matches your HTML tag
  templateUrl: './librarylist.component.html',  // Path to the HTML file
  styleUrls: ['./librarylist.component.css']  // Path to the CSS file
})
export class LibraryListComponent {
  libraryName: string = '';  // Variable to hold the library name input
  libraryVersion: string = '';  // Variable to hold the library version input

  // Array to hold the list of libraries
  libraryList: { name: string; version: string }[] = [
    { name: 'Lodash', version: '4.17.21' },
  ];

  // Method to add a new library to the list
  addLibrary() {
    if (this.libraryName && this.libraryVersion) {
      this.libraryList.push({ name: this.libraryName, version: this.libraryVersion });  // Add the new library to the list
      this.clearInput();  // Clear the input fields after adding the library
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.libraryName = '';
    this.libraryVersion = '';
  }
}
