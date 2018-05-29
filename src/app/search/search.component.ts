import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

declare var dataLayer: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  query = '';
  results: any[] = [];
  total = 0;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.query = this.route.snapshot.queryParams.q || '';
    this.handleQueryChange();
  }
  handleQueryChange() {
    dataLayer.push('event', 'conversion', {
      send_to: 'AW-997285583/dMSCCPP174IBEM-9xdsD',
    });
    this.searchService.search(this.query).subscribe(res => {
      this.results = res.hits;
      this.total = res.nbHits;
    });
  }
  trackBy(idx: number, res: any) {
    return res.name;
  }
}
