import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
movie: Object;

constructor( private moviesService: MoviesService,
             private usersService: UsersService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getMovie(params.id);
    });
  }

  getMovie(params) {
    this.moviesService.getMovieInfo(params).subscribe(data => {
      this.movie = data;
    });
  }

  buyMovie(movie) {
    this.usersService.addMovieFromAllToPrivate.emit(movie);

    // this.usersService.addMovieToPrivateMovies(movie);
    this.router.navigate(['/']);
  }
}
