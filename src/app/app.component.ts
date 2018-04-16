import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';
  results: any[] = [];
  total = 0;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.search('toastr').subscribe((res) => {
      console.log(res);
      this.results = res.hits;
      this.total = res.nbHits;
    });
  }

}
