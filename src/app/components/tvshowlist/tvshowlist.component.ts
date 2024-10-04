import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-show-list',  // Ensure this matches your HTML tag
  templateUrl: './tvshowlist.component.html',  // Path to the HTML file
  styleUrls: ['./tvshowlist.component.css']  // Path to the CSS file
})
export class TvShowListComponent {
  showTitle: string = '';  // Variable to hold the TV show title input
  showList: string[] = [   // Array to hold the list of TV shows
    'Stranger Things',

  ];

  // Method to add a new TV show to the list
  addShow() {
    if (this.showTitle) {
      this.showList.push(this.showTitle);  // Add the new show to the list
      this.clearInput();  // Clear the input field after adding the show
    }
  }

  // Method to clear the input field
  clearInput() {
    this.showTitle = '';
  }
}
