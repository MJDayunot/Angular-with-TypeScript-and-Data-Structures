import { Injectable } from '@angular/core';

export interface Animal {
  name: string;    
  species: string; 
}

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private animalList: Animal[] = [
    { name: 'Lion', species: 'Panthera leo' },
  ];

  // Method to get the list of animals
  getAnimals(): Animal[] {
    return this.animalList;
  }

  // Method to add a new animal to the list
  addAnimal(animal: Animal) {
    this.animalList.push(animal);
  }
}
