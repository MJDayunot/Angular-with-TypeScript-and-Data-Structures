import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list', 
  templateUrl: './librarylist.component.html',  
  styleUrls: ['./librarylist.component.css']  
})
export class LibraryListComponent {
  libraryName: string = '';  
  libraryVersion: string = '';  

  // Array to hold the list of libraries
  libraryList: { name: string; version: string }[] = [
    { name: 'Lodash', version: '4.17.21' },
  ];

  // Method to add a new library to the list
  addLibrary() {
    if (this.libraryName && this.libraryVersion) {
      this.libraryList.push({ name: this.libraryName, version: this.libraryVersion });  
      this.clearInput();  
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.libraryName = '';
    this.libraryVersion = '';
  }
}
