import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoList: string[] = [
    'Introduction to Angular',
  ];

  // Method to get the list of videos
  getVideoList(): string[] {
    return this.videoList;
  }

  // Method to add a new video to the list
  addVideo(video: string) {
    this.videoList.push(video);
  }
}
