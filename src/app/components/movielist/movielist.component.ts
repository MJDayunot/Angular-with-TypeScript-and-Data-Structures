import { Component } from '@angular/core';  // Import Component

// Define an interface for the Movie structure
interface Movie {
  title: string;
  director: string;
  releaseYear: number;  // Release year of the movie
}

@Component({
  selector: 'app-movie-list',  // Ensure this matches your HTML tag
  templateUrl: './movielist.component.html',  // Path to the HTML file
  styleUrls: ['./movielist.component.css']  // Path to the CSS file
})
export class MovieListComponent {
  // Declare properties for movie details
  movieTitle: string = '';  // Variable to hold the movie title input
  movieDirector: string = '';  // Variable to hold the movie director input
  movieReleaseYear: number | null = null;  // Variable to hold the movie release year input

  // Array to hold the list of movies
  movieList: Movie[] = [
    { title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010 }

  ];

  // Method to add a new movie to the list
  addMovie() {
    if (this.movieTitle && this.movieDirector && this.movieReleaseYear !== null) {
      const newMovie: Movie = {
        title: this.movieTitle,
        director: this.movieDirector,
        releaseYear: this.movieReleaseYear
      };
      this.movieList.push(newMovie);  // Add the new movie to the list
      this.clearInputs();  // Clear the input fields after adding the movie
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.movieTitle = '';
    this.movieDirector = '';
    this.movieReleaseYear = null;  // Reset to null
  }
}
