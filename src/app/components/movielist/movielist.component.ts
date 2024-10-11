import { Component, OnInit } from '@angular/core';
import { MovielistService } from '../../services/movielist.service';  // Import the service

interface Movie {
  title: string;
  director: string;
  releaseYear: number;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovieListComponent implements OnInit {
  movieTitle: string = '';
  movieDirector: string = '';
  movieReleaseYear: number | null = null;
  movieList: Movie[] = [];

  // Inject the service into the component
  constructor(private movielistService: MovielistService) {}

  // Load the movies from the service when the component initializes
  ngOnInit() {
    this.movieList = this.movielistService.getMovies();
  }

  // Method to add a new movie using the service
  addMovie() {
    if (this.movieTitle && this.movieDirector && this.movieReleaseYear !== null) {
      const newMovie: Movie = {
        title: this.movieTitle,
        director: this.movieDirector,
        releaseYear: this.movieReleaseYear
      };
      this.movielistService.addMovie(newMovie);  // Add the movie via the service
      this.movieList = this.movielistService.getMovies();  // Refresh the list
      this.clearInputs();
    }
  }

  clearInputs() {
    this.movieTitle = '';
    this.movieDirector = '';
    this.movieReleaseYear = null;
  }
}
