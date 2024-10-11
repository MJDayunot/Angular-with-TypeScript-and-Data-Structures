import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  private paintingList: string[] = [
    'Mona Lisa',
  ];

  // Method to get the list of paintings
  getPaintingList(): string[] {
    return this.paintingList;
  }

  // Method to add a new painting to the list
  addPainting(painting: string) {
    this.paintingList.push(painting);
  }
}
