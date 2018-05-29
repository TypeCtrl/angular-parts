import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-browse-tag',
  templateUrl: './browse-tag.component.html',
})
export class BrowseTagComponent implements OnInit {
  tag = '';
  results = [];
  total = 0;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tag = params.tag;
      this.browse();
    });
  }
  browse() {
    this.searchService.tag(this.tag).subscribe(res => {
      this.results = res.hits;
      this.total = res.nbHits;
    });
  }
  trackBy(idx: number, res: any) {
    return res.name;
  }
}
