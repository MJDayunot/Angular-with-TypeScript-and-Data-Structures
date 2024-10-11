import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private podcastList: string[] = [
    'Episode 1: The Power of Mindfulness',
  ];

  
  getPodcastList(): string[] {
    return this.podcastList;
  }

  // Method to add a new podcast episode to the list
  addPodcast(episode: string) {
    this.podcastList.push(episode);
  }
}
