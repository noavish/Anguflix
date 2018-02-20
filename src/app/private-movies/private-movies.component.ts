import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movieModel';
import {UsersService} from '../users.service';
import {User} from '../userModel';
import {DragDropData} from 'ng2-dnd';

@Component({
  selector: 'app-private-movies',
  templateUrl: './private-movies.component.html',
  styleUrls: ['./private-movies.component.css']
})
export class PrivateMoviesComponent implements OnInit {
  user: User;
  title: string = 'Select movies from below to add to your collection';
  privateMovies: any[];
  currentSearchTerm: string;
  deleteMoviesFromPrivate: boolean;
  status: string;


  constructor( private moviesService: MoviesService, private usersService: UsersService ) {}

  ngOnInit() {
    this.usersService.addMovieFromAllToPrivate.subscribe(data => {
      this.usersService.addMovieToPrivateMovies(data);
      this.getStatus(data);
    });
    this.user = this.usersService.getUser();
    this.privateMovies = this.usersService.getPrivateMovies();
  }

  searchMovie(searchTerm: string) {
    // let foundMovie = this.privateMovies.find((movie) => movie.title.includes(searchTerm != '' && searchTerm));
    this.currentSearchTerm = searchTerm;
  }

  allowRemoveMovies() {
    this.deleteMoviesFromPrivate = !this.deleteMoviesFromPrivate;
  }

  removeMovieFromPrivate(movie: Movie) {
    this.usersService.removeMovieFromPrivateMovieArray(movie);
  }

  getStatus(movie: Movie)  {
    const status = this.usersService.getBudgetState();
    switch (status) {
      case 0:
        this.status = '';
        break;
      case 1:
        this.status = `You don't have enough money, you only have $${this.user.budget} left`;
        break;
      case 2:
        this.status = `${movie.title} is already in your collection`;
        break;
      case 3:
        this.status = `You can't purchase ${movie.title}, your budget is empty`;
    }
  }

  transferDataSuccess(data) {
    console.log(data.dragData);
    this.usersService.addMovieToPrivateMovies(data.dragData);
  }
}
