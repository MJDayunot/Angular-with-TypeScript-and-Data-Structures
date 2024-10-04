import { Component } from '@angular/core';  // Import Component

// Define an interface for the Song structure
interface Song {
  title: string;  // Title of the song
  artist: string;  // Artist of the song
  duration: string;  // Duration of the song (e.g., "3:45")
}

@Component({
  selector: 'app-music-playlist',  // Ensure this matches your HTML tag
  templateUrl: './musicplaylist.component.html',  // Path to the HTML file
  styleUrls: ['./musicplaylist.component.css']  // Path to the CSS file
})
export class MusicPlaylistComponent {
  // Declare properties for song details
  songTitle: string = '';      // Variable to hold the song title input
  songArtist: string = '';     // Variable to hold the song artist input
  songDuration: string = '';   // Variable to hold the song duration input

  // Array to hold the list of songs
  songList: Song[] = [
    { title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53' },

  ];

  // Method to add a new song to the list
  addSong() {
    if (this.songTitle && this.songArtist && this.songDuration) {
      const newSong: Song = {
        title: this.songTitle,
        artist: this.songArtist,
        duration: this.songDuration
      };
      this.songList.push(newSong);  // Add the new song to the list
      this.clearInputs();  // Clear the input fields after adding the song
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.songTitle = '';
    this.songArtist = '';
    this.songDuration = '';
  }
}
