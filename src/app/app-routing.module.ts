import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import {MovieInfoComponent} from './movie-info/movie-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'movie/:id', component: MovieInfoComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
