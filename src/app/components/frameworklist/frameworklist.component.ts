import { Component } from '@angular/core';

@Component({
  selector: 'app-framework-list',  // Ensure this matches your HTML tag
  templateUrl: './frameworklist.component.html',  // Path to the HTML file
  styleUrls: ['./frameworklist.component.css']  // Path to the CSS file
})
export class FrameworkListComponent {
  frameworkName: string = '';  // Variable to hold the framework name input
  frameworkDescription: string = '';  // Variable to hold the framework description input

  // Array to hold the list of web development frameworks
  frameworkList: { name: string; description: string }[] = [
    { name: 'Angular', description: 'A platform for building mobile and desktop web applications.' },

  ];

  // Method to add a new framework to the list
  addFramework() {
    if (this.frameworkName && this.frameworkDescription) {
      this.frameworkList.push({ name: this.frameworkName, description: this.frameworkDescription });  // Add the new framework to the list
      this.clearInput();  // Clear the input fields after adding the framework
    }
  }

  // Method to clear the input fields
  clearInput() {
    this.frameworkName = '';
    this.frameworkDescription = '';
  }
}
