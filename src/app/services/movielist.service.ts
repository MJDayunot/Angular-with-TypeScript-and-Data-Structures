import { Injectable } from '@angular/core';

interface Movie {
  title: string;
  director: string;
  releaseYear: number;  // Release year of the movie
}

@Injectable({
  providedIn: 'root',
})
export class MovielistService {
  // List of movies
  private movieList: Movie[] = [
    { title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010 }
  ];

  // Method to get the list of movies
  getMovies(): Movie[] {
    return this.movieList;
  }

  // Method to add a new movie to the list
  addMovie(movie: Movie): void {
    this.movieList.push(movie);
  }
}
