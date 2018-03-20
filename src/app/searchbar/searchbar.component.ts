import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styles: [`
  .input-group-text {
    border-right: none;
  }
  .form-control {
    border-left-width: 0;
  }
  `]
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
