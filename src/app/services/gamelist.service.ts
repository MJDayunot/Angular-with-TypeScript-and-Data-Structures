// game.service.ts
import { Injectable } from '@angular/core';

export interface Game {
  title: string;          // Title of the game
  genre: string;          // Genre of the game
  releaseYear: number;    // Release year of the game
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameList: Game[] = [
    { title: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-adventure', releaseYear: 2017 },
  ];

  // Method to get the list of games
  getGames(): Game[] {
    return this.gameList;
  }

  // Method to add a new game to the list
  addGame(game: Game) {
    this.gameList.push(game);
  }
}
