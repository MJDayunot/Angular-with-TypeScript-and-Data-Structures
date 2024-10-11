import { Injectable } from '@angular/core';

export interface Language {
  name: string;  
  year: number;  
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageList: Language[] = [
    { name: 'JavaScript', year: 1995 },
  ];

  // Method to get the list of languages
  getLanguages(): Language[] {
    return this.languageList;
  }

  // Method to add a new language to the list
  addLanguage(language: Language) {
    this.languageList.push(language);
  }
}
