import { Component } from '@angular/core';
import { Animal, AnimalService } from '../../services/animallist.service'; // Correct import path

@Component({
  selector: 'app-animal-list',
  templateUrl: './animallist.component.html',
  styleUrls: ['./animallist.component.css']
})
export class AnimalListComponent {
  animalName: string = '';        // Variable to hold the animal name input
  animalSpecies: string = '';     // Variable to hold the species input
  animalList: Animal[] = [];      // Initialize the animal list

  constructor(private animalService: AnimalService) {
    this.animalList = this.animalService.getAnimals(); // Fetch animals from the service
  }

  // Method to add a new animal to the list
  addAnimal() {
    if (this.animalName && this.animalSpecies) {
      const newAnimal: Animal = {
        name: this.animalName,
        species: this.animalSpecies
      };
      this.animalService.addAnimal(newAnimal); // Use the service to add the animal
      this.clearInputs(); // Clear input fields
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.animalName = '';
    this.animalSpecies = '';
  }
}
