import {EventEmitter, Injectable} from '@angular/core';
import { User } from './userModel';
import { Movie } from './movieModel';

const USER: User = {id: 1, name: 'Noa', budget: 10, privateMovies: []};


@Injectable()
export class UsersService {
  user: User = USER;
  budgetState = 0;
  privateMovies: Movie[] = USER.privateMovies;
  addMovieFromAllToPrivate = new EventEmitter();

  constructor() { }

  getUser(): User {
    return this.user;
  }

  getBudgetState(): number {
    return this.budgetState;
  }

  reduceFromBudget(price: number) {
    this.user.budget -= price;
  }

  addMovieToPrivateMovies(movie: Movie) {
    if (this.user.budget >= movie.price && this.isMovieNewToArray(movie.title)) {
      this.addMovieToPrivateArray(movie);
      this.reduceFromBudget(movie.price);
      this.budgetState = 0;
    } else if (this.user.budget > 0 && this.user.budget < movie.price) {
      this.budgetState = 1;
    } else if (this.user.budget >= movie.price && (!this.isMovieNewToArray(movie.title))) {
      this.budgetState = 2;
    } else {
      this.budgetState = 3;
    }
  }

  getPrivateMovies(): Movie[] {
    return this.privateMovies;
  }

  removeMovieFromPrivateMovieArray(movieToDelete: Movie) {
    const movieIndex = this.privateMovies.findIndex(m => m.id == movieToDelete.id);
    this.privateMovies.splice(movieIndex, 1);
    // this.privateMovies = this.privateMovies.filter((movie) => {
    //   return movie.id !== movieToDelete.id;
    // });
    // return this.privateMovies;
  }

  isMovieNewToArray(title: string) {
    for (const movie of this.privateMovies) {
      if (title == movie.title) {
        return false;
      }
    }
    return true;
  }

  addMovieToPrivateArray(movie: Movie) {
    this.privateMovies.push(movie);
    console.log(this.privateMovies);
  }

}
