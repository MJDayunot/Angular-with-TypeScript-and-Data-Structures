import { Injectable } from '@angular/core';

interface Movie {
  title: string;
  director: string;
  releaseYear: number;  
}

@Injectable({
  providedIn: 'root',
})
export class MovielistService {
  
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
