import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styles: [`
  .input-group-prepend > .input-group-text {
    border-right: none;
  }
  .clear {
    border-left-width: 0;
  }
  .form-control {
    border-left-width: 0;
    border-right-width: 0;
  }
  `]
})
export class SearchbarComponent implements OnInit {
  query = '';
  constructor() { }

  ngOnInit() {
  }

}
