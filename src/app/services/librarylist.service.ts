import { Injectable } from '@angular/core';

interface Library {
  name: string;
  version: string;
}

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private libraryList: Library[] = [
    { name: 'Lodash', version: '4.17.21' },
  ];

  
  getLibraryList(): Library[] {
    return this.libraryList;
  }

  // Method to add a new library to the list
  addLibrary(library: Library) {
    this.libraryList.push(library);
  }
}
