import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styles: [
    `
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
  `,
  ],
})
export class SearchbarComponent implements OnInit {
  query = '';
  @Output() queryChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  handleQueryChange(query: string) {
    console.log(query);
    this.queryChange.emit(query);
  }
}
