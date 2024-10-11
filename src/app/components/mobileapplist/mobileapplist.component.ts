import { Component } from '@angular/core';
import { MobileAppService } from '../../services/mobileapplist.service'; // Adjust the import path as needed

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobileapplist.component.html',
  styleUrls: ['./mobileapplist.component.css']
})
export class MobileAppListComponent {
  appName: string = '';  // Variable to hold the app name input
  appList: string[] = []; // Array to hold the list of mobile apps

  constructor(private mobileAppService: MobileAppService) {
    this.appList = this.mobileAppService.getAppList(); // Fetch initial app list from the service
  }

  // Method to add a new mobile app to the list
  addApp() {
    if (this.appName) {
      this.mobileAppService.addApp(this.appName); // Use the service to add the app
      this.clearInput();  // Clear the input field after adding the app
      this.appList = this.mobileAppService.getAppList(); // Refresh the list
    }
  }

  // Method to clear the input field
  clearInput() {
    this.appName = '';
  }
}
