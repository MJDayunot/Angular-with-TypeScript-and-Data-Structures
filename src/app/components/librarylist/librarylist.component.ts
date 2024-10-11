import { Component } from '@angular/core';
import { LibraryService } from '../../services/librarylist.service'; // Adjust the import path as needed

interface Library {
  name: string;
  version: string;
}

@Component({
  selector: 'app-library-list',
  templateUrl: './librarylist.component.html',
  styleUrls: ['./librarylist.component.css']
})
export class LibraryListComponent {
  libraryName: string = '';  // Variable to hold the library name input
  libraryVersion: string = '';  // Variable to hold the library version input
  libraryList: Library[] = [];  // Array to hold the list of libraries

  constructor(private libraryService: LibraryService) {
    this.libraryList = this.libraryService.getLibraryList(); // Fetch initial library list from the service
  }

  // Method to add a new library to the list
  addLibrary() {
    if (this.libraryName && this.libraryVersion) {
      this.libraryService.addLibrary({ name: this.libraryName, version: this.libraryVersion }); // Use the service to add the library
      this.clearInput();  // Clear the input fields after adding the library
      this.libraryList = this.libraryService.getLibraryList(); // Refresh the list
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.libraryName = '';
    this.libraryVersion = '';
  }
}
