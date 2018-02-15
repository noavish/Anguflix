import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor( private moviesService: MoviesService ) { }

  ngOnInit() {

  }

  get budget() {
    return this.moviesService.getBudget();
  }

}
