import { Component } from '@angular/core';  // Import Component

// Define an interface for the Language structure
interface Language {
  name: string;  // Name of the programming language
  year: number;  // Year of creation or release
}

@Component({
  selector: 'app-language-list',  // Ensure this matches your HTML tag
  templateUrl: './languagelist.component.html',  // Path to the HTML file
  styleUrls: ['./languagelist.component.css']  // Path to the CSS file
})
export class LanguageListComponent {
  // Declare properties for language details
  languageName: string = '';      // Variable to hold the language name input
  languageYear: number | null = null;  // Variable to hold the year input (nullable)

  // Array to hold the list of programming languages
  languageList: Language[] = [
    { name: 'JavaScript', year: 1995 },

  ];

  // Method to add a new programming language to the list
  addLanguage() {
    if (this.languageName && this.languageYear) {
      const newLanguage: Language = {
        name: this.languageName,
        year: this.languageYear
      };
      this.languageList.push(newLanguage);  // Add the new language to the list
      this.clearInputs();  // Clear the input fields after adding the language
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.languageName = '';
    this.languageYear = null;
  }
}
