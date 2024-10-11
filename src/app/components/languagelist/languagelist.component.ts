import { Component } from '@angular/core';
import { Language, LanguageService } from '../../services/languagelist.service'; // Correct import path

@Component({
  selector: 'app-language-list',
  templateUrl: './languagelist.component.html',
  styleUrls: ['./languagelist.component.css']
})
export class LanguageListComponent {
  languageName: string = '';          // Variable to hold the language name input
  languageYear: number | null = null; // Variable to hold the year input

  languageList: Language[] = [];      // Initialize the language list

  constructor(private languageService: LanguageService) {
    this.languageList = this.languageService.getLanguages(); // Fetch languages from the service
  }

  // Method to add a new programming language to the list
  addLanguage() {
    if (this.languageName && this.languageYear) {
      const newLanguage: Language = {
        name: this.languageName,
        year: this.languageYear
      };
      this.languageService.addLanguage(newLanguage); // Use the service to add the language
      this.clearInputs(); // Clear input fields
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.languageName = '';
    this.languageYear = null;
  }
}
