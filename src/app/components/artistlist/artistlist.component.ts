import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',  // Ensure this matches your HTML tag
  templateUrl: './artistlist.component.html',  // Path to the HTML file
  styleUrls: ['./artistlist.component.css']  // Path to the CSS file
})
export class ArtistListComponent {
  artistName: string = '';  // Variable to hold the artist name input
  artistList: string[] = [   // Array to hold the list of artists
    'Leonardo da Vinci',
  ];

  // Method to add a new artist to the list
  addArtist() {
    if (this.artistName) {
      this.artistList.push(this.artistName);  // Add the new artist to the list
      this.clearInput();  // Clear the input field after adding the artist
    }
  }

  // Method to clear the input field
  clearInput() {
    this.artistName = '';
  }
}
