import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchChanged: EventEmitter<string> = new EventEmitter();
  changedSearch: string;
  constructor() { }

  ngOnInit() {
  }

  searchMovieTitle(){
      this.searchChanged.emit(this.changedSearch);
  }
}
