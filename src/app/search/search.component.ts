import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  query = '';
  results: any[] = [];
  total = 0;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.query = this.route.snapshot.queryParams.q || '';
    this.searchService.search('toastr').subscribe((res) => {
      console.log(res);
      this.results = res.hits;
      this.total = res.nbHits;
    });
  }

}
