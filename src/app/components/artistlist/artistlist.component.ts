import { Component } from '@angular/core';
import { ArtistService } from '../../services/artistlist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-artist-list',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.css']
})
export class ArtistListComponent {
  artistName: string = '';  // Variable to hold the artist name input
  artistList: string[] = [];  // Array to hold the list of artists

  constructor(private artistService: ArtistService) {
    this.artistList = this.artistService.getArtistList(); // Fetch initial artist list from the service
  }

  // Method to add a new artist to the list
  addArtist() {
    if (this.artistName) {
      this.artistService.addArtist(this.artistName); // Use the service to add the artist
      this.clearInput();  // Clear the input field after adding the artist
      this.artistList = this.artistService.getArtistList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.artistName = '';
  }
}
