import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movieModel';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movies: any;
  currentSearchTerm: string;

  constructor( private moviesService: MoviesService, private usersService: UsersService ) { }

  ngOnInit() {
    // this.movies = this.moviesService.getAllMovies();
    this.moviesService.getAllMovies().subscribe(
      movies => this.movies = movies,
      error => {
        console.error(error);
      });
  }


  searchMovie(searchTerm: string) {
    // let foundMovie = this.movies.find((movie) => movie.title.includes(searchTerm != '' && searchTerm));
    this.currentSearchTerm = searchTerm;
  }

  addMovieToPrivate(movie: Movie) {
    this.usersService.addMovieFromAllToPrivate.emit(movie);
  }
}
