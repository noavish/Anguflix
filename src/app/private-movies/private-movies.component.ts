import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movieModel';

@Component({
  selector: 'app-private-movies',
  templateUrl: './private-movies.component.html',
  styleUrls: ['./private-movies.component.css']
})
export class PrivateMoviesComponent implements OnInit {
  title: string = 'Select movies from below to add to your collection';
  privateMovies: any[];
  currentSearchTerm: string;
  deleteMoviesFromPrivate: boolean;


  constructor( private moviesService: MoviesService ) { }

  ngOnInit() {
    this.privateMovies = this.moviesService.getPrivateMovies();
    console.log(this.privateMovies)
  }

  searchMovie(searchTerm: string) {
    // let foundMovie = this.privateMovies.find((movie) => movie.title.includes(searchTerm != '' && searchTerm));
    this.currentSearchTerm = searchTerm;
  }

  get budgetState() {
    return this.moviesService.getBudgetState();
  }

  allowRemoveMovies() {
    this.deleteMoviesFromPrivate = !this.deleteMoviesFromPrivate;
  }

  removeMovieFromPrivate(movie: Movie) {
    this.moviesService.removeMovieFromPrivateMovieArray(movie);
  }
}
