import { Movie } from './movieModel';

export class User {
  id: number;
  name: string;
  budget: number;
  privateMovies: Movie[];
};
