import { Component } from '@angular/core';  // Import Component

// Define an interface for the Game structure
interface Game {
  title: string;  // Title of the game
  genre: string;  // Genre of the game
  releaseYear: number;  // Release year of the game
}

@Component({
  selector: 'app-game-list',  // Ensure this matches your HTML tag
  templateUrl: './gamelist.component.html',  // Path to the HTML file
  styleUrls: ['./gamelist.component.css']  // Path to the CSS file
})
export class GameListComponent {
  // Declare properties for game details
  gameTitle: string = '';      // Variable to hold the game title input
  gameGenre: string = '';      // Variable to hold the game genre input
  gameReleaseYear: number | null = null;  // Variable to hold the release year input (nullable)

  // Array to hold the list of video games
  gameList: Game[] = [
    { title: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-adventure', releaseYear: 2017 },

  ];

  // Method to add a new video game to the list
  addGame() {
    if (this.gameTitle && this.gameGenre && this.gameReleaseYear) {
      const newGame: Game = {
        title: this.gameTitle,
        genre: this.gameGenre,
        releaseYear: this.gameReleaseYear
      };
      this.gameList.push(newGame);  // Add the new game to the list
      this.clearInputs();  // Clear the input fields after adding the game
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.gameTitle = '';
    this.gameGenre = '';
    this.gameReleaseYear = null;
  }
}
