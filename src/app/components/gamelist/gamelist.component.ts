import { Component } from '@angular/core';
import { Game, GameService } from '../../services/gamelist.service'; // Correct import path

@Component({
  selector: 'app-game-list',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GameListComponent {
  gameTitle: string = '';           // Variable to hold the game title input
  gameGenre: string = '';           // Variable to hold the game genre input
  gameReleaseYear: number | null = null; // Variable to hold the release year input (nullable)

  gameList: Game[] = [];            // Initialize the game list

  constructor(private gameService: GameService) {
    this.gameList = this.gameService.getGames(); // Fetch games from the service
  }

  // Method to add a new video game to the list
  addGame() {
    if (this.gameTitle && this.gameGenre && this.gameReleaseYear) {
      const newGame: Game = {
        title: this.gameTitle,
        genre: this.gameGenre,
        releaseYear: this.gameReleaseYear
      };
      this.gameService.addGame(newGame); // Use the service to add the game
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
