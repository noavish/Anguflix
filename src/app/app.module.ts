import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {DndModule} from 'ng2-dnd';

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
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';


@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    PrivateMoviesComponent,
    MovieComponent,
    SearchBarComponent,
    BudgetComponent,
    FilterPipe,
    HomeComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DndModule,
    DndModule.forRoot()
  ],
  providers: [MoviesService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
