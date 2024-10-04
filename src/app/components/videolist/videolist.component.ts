import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',  // Ensure this matches your HTML tag
  templateUrl: './videolist.component.html',  // Path to the HTML file
  styleUrls: ['./videolist.component.css']  // Path to the CSS file
})
export class VideoListComponent {
  videoTitle: string = '';  // Variable to hold the video title input
  videoList: string[] = [   // Array to hold the list of videos
    'Introduction to Angular',
  ];

  // Method to add a new video to the list
  addVideo() {
    if (this.videoTitle) {
      this.videoList.push(this.videoTitle);  // Add the new video to the list
      this.clearInput();  // Clear the input field after adding the video
    }
  }

  // Method to clear the input field
  clearInput() {
    this.videoTitle = '';
  }
}
