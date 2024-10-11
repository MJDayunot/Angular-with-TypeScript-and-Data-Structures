import { Component } from '@angular/core';
import { PodcastService } from '../../services/podcastlist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcastlist.component.html',
  styleUrls: ['./podcastlist.component.css']
})
export class PodcastListComponent {
  episodeTitle: string = '';  // Variable to hold the podcast episode title input
  podcastList: string[] = [];  // Array to hold the list of podcast episodes

  constructor(private podcastService: PodcastService) {
    this.podcastList = this.podcastService.getPodcastList(); // Fetch initial podcast list from the service
  }

  // Method to add a new podcast episode to the list
  addEpisode() {
    if (this.episodeTitle) {
      this.podcastService.addPodcast(this.episodeTitle); // Use the service to add the episode
      this.clearInput();  // Clear the input field after adding the episode
      this.podcastList = this.podcastService.getPodcastList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.episodeTitle = '';
  }
}
