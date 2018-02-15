import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Movie } from '../movieModel';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = new Movie();
  @Output() clickedMovie: EventEmitter<Movie> = new EventEmitter();
  @Input() deleteMoviesFromPrivate: boolean;
  @Output() clickToRemoveMovie: EventEmitter<Movie> = new EventEmitter();


  constructor( ) {}

  ngOnInit() {
  }

  movieWasClicked(movie: Movie) {
    this.clickedMovie.emit(movie);
  }

  removeMovieFromPrivate(movie: Movie) {
    this.clickToRemoveMovie.emit(movie);
  }

}
