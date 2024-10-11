import { Component } from '@angular/core';
import { ComposerService } from '../../services/composerlist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-composer-list',
  templateUrl: './composerlist.component.html',
  styleUrls: ['./composerlist.component.css']
})
export class ComposerListComponent {
  composerName: string = '';  // Variable to hold the composer name input
  composerList: string[] = [];  // Array to hold the list of composers

  constructor(private composerService: ComposerService) {
    this.composerList = this.composerService.getComposerList(); // Fetch initial composer list from the service
  }

  // Method to add a new composer to the list
  addComposer() {
    if (this.composerName) {
      this.composerService.addComposer(this.composerName); // Use the service to add the composer
      this.clearInput();  // Clear the input field after adding the composer
      this.composerList = this.composerService.getComposerList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.composerName = '';
  }
}
