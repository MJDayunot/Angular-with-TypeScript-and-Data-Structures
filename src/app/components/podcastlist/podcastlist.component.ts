import { Component } from '@angular/core';

@Component({
  selector: 'app-podcast-list',  // Ensure this matches your HTML tag
  templateUrl: './podcastlist.component.html',  // Path to the HTML file
  styleUrls: ['./podcastlist.component.css']  // Path to the CSS file
})
export class PodcastListComponent {
  episodeTitle: string = '';  // Variable to hold the podcast episode title input
  podcastList: string[] = [    // Array to hold the list of podcast episodes
    'Episode 1: The Power of Mindfulness',

  ];

  // Method to add a new podcast episode to the list
  addEpisode() {
    if (this.episodeTitle) {
      this.podcastList.push(this.episodeTitle);  // Add the new episode to the list
      this.clearInput();  // Clear the input field after adding the episode
    }
  }

  // Method to clear the input field
  clearInput() {
    this.episodeTitle = '';
  }
}
