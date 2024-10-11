import { Component } from '@angular/core';
import { Song, MusicService } from '../../services/musicplaylist.service'; // Adjust import path

@Component({
  selector: 'app-music-playlist',
  templateUrl: './musicplaylist.component.html',
  styleUrls: ['./musicplaylist.component.css']
})
export class MusicPlaylistComponent {
  // Declare properties for song details
  songTitle: string = '';      // Variable to hold the song title input
  songArtist: string = '';     // Variable to hold the song artist input
  songDuration: string = '';   // Variable to hold the song duration input

  // Array to hold the list of songs
  songList: Song[] = [];       // Initialize as an empty array

  constructor(private musicService: MusicService) {
    this.songList = this.musicService.getSongs(); // Fetch songs from the service
  }

  // Method to add a new song to the list
  addSong() {
    if (this.songTitle && this.songArtist && this.songDuration) {
      const newSong: Song = {
        title: this.songTitle,
        artist: this.songArtist,
        duration: this.songDuration
      };
      this.musicService.addSong(newSong); // Use the service to add the song
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
