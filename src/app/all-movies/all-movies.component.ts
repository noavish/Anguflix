import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movieModel';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movies: any[];
  currentSearchTerm: string;

  constructor( private moviesService: MoviesService ) { }

  ngOnInit() {
    this.movies = this.moviesService.getAllMovies();
  }


  searchMovie(searchTerm: string) {
    // let foundMovie = this.movies.find((movie) => movie.title.includes(searchTerm != '' && searchTerm));
    this.currentSearchTerm = searchTerm;
  }

  addMovieToPrivate(movie: Movie) {
    this.moviesService.addMovieToPrivateMovies(movie);
  }
}
