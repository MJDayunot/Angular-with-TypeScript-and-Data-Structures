import { Injectable } from '@angular/core';

export interface Song {
  title: string;   
  artist: string;  
  duration: string; 
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
