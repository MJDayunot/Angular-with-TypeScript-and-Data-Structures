import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-app-list',  // Ensure this matches your HTML tag
  templateUrl: './mobileapplist.component.html',  // Path to the HTML file
  styleUrls: ['./mobileapplist.component.css']  // Path to the CSS file
})
export class MobileAppListComponent {
  appName: string = '';  // Variable to hold the app name input
  appList: string[] = [  // Array to hold the list of mobile apps
    'Facebook',
  ];

  // Method to add a new mobile app to the list
  addApp() {
    if (this.appName) {
      this.appList.push(this.appName);  // Add the new app to the list
      this.clearInput();  // Clear the input field after adding the app
    }
  }

  // Method to clear the input field
  clearInput() {
    this.appName = '';
  }
}
