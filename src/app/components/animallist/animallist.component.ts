import { Component } from '@angular/core';  // Import Component

// Define an interface for the Animal structure
interface Animal {
  name: string;  // Name of the animal
  species: string;  // Species of the animal
}

@Component({
  selector: 'app-animal-list',  // Ensure this matches your HTML tag
  templateUrl: './animallist.component.html',  // Path to the HTML file
  styleUrls: ['./animallist.component.css']  // Path to the CSS file
})
export class AnimalListComponent {
  // Declare properties for animal details
  animalName: string = '';      // Variable to hold the animal name input
  animalSpecies: string = '';   // Variable to hold the species input

  // Array to hold the list of animals
  animalList: Animal[] = [
    { name: 'Lion', species: 'Panthera leo' },

  ];

  // Method to add a new animal to the list
  addAnimal() {
    if (this.animalName && this.animalSpecies) {
      const newAnimal: Animal = {
        name: this.animalName,
        species: this.animalSpecies
      };
      this.animalList.push(newAnimal);  // Add the new animal to the list
      this.clearInputs();  // Clear the input fields after adding the animal
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.animalName = '';
    this.animalSpecies = '';
  }
}
