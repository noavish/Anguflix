import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { PrivateMoviesComponent } from './private-movies/private-movies.component';
import { MovieComponent } from './movie/movie.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BudgetComponent } from './budget/budget.component';
import { MoviesService } from './movies.service';
import { UsersService } from './users.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    PrivateMoviesComponent,
    MovieComponent,
    SearchBarComponent,
    BudgetComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MoviesService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
