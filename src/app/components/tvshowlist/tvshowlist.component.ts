import { Component } from '@angular/core';
import { TvShowService } from '../../services/tvshowlist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tvshowlist.component.html',
  styleUrls: ['./tvshowlist.component.css']
})
export class TvShowListComponent {
  showTitle: string = '';  // Variable to hold the TV show title input
  showList: string[] = [];  // Array to hold the list of TV shows

  constructor(private tvShowService: TvShowService) {
    this.showList = this.tvShowService.getShowList(); // Fetch initial show list from the service
  }

  // Method to add a new TV show to the list
  addShow() {
    if (this.showTitle) {
      this.tvShowService.addShow(this.showTitle); // Use the service to add the show
      this.clearInput();  // Clear the input field after adding the show
      this.showList = this.tvShowService.getShowList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.showTitle = '';
  }
}
