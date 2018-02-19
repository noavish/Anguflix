import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import {UsersService} from '../users.service';
import {User} from '../userModel';


@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  user: User;
  constructor( private moviesService: MoviesService, private usersService: UsersService ) { }

  ngOnInit() {
    this.user = this.usersService.getUser();
  }

}
