import { Injectable } from '@angular/core';

export interface Song {
  title: string;   // Title of the song
  artist: string;  // Artist of the song
  duration: string; // Duration of the song (e.g., "3:45")
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private songList: Song[] = [
    { title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53' },
  ];

  // Method to get the list of songs
  getSongs(): Song[] {
    return this.songList;
  }

  // Method to add a new song to the list
  addSong(song: Song) {
    this.songList.push(song);
  }
}
