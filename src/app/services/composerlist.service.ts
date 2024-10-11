import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  private composerList: string[] = [
    'Ludwig van Beethoven',
  ];

  // Method to get the list of composers
  getComposerList(): string[] {
    return this.composerList;
  }

  // Method to add a new composer to the list
  addComposer(composer: string) {
    this.composerList.push(composer);
  }
}
