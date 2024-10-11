import { Component } from '@angular/core';
import { VideoService } from '../../services/videolist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-video-list',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideoListComponent {
  videoTitle: string = '';  // Variable to hold the video title input
  videoList: string[] = [];  // Array to hold the list of videos

  constructor(private videoService: VideoService) {
    this.videoList = this.videoService.getVideoList(); // Fetch initial video list from the service
  }

  // Method to add a new video to the list
  addVideo() {
    if (this.videoTitle) {
      this.videoService.addVideo(this.videoTitle); // Use the service to add the video
      this.clearInput();  // Clear the input field after adding the video
      this.videoList = this.videoService.getVideoList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.videoTitle = '';
  }
}
