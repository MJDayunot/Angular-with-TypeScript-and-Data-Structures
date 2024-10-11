import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private artistList: string[] = [
    'Leonardo da Vinci',
  ];

  // Method to get the list of artists
  getArtistList(): string[] {
    return this.artistList;
  }

  // Method to add a new artist to the list
  addArtist(artist: string) {
    this.artistList.push(artist);
  }
}
