import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private presentationList: string[] = [
    'The Impact of Climate Change',
  ];

  
  getPresentationList(): string[] {
    return this.presentationList;
  }

  // Method to add a new presentation topic to the list
  addPresentationTopic(topic: string) {
    this.presentationList.push(topic);
  }
}
