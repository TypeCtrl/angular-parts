import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { categories } from '../../categories';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  recent: any[] = [];
  popular: any[] = [];
  categories: any[] = categories;

  constructor(private search: SearchService) {}

  ngOnInit() {
    this.search.search('').subscribe(res => {
      const facets = res.facets._tags;
      this.categories = this.categories
        .map((n: any) => {
          n.count = facets[n.name];
          return n;
        })
        .sort((a, b) => {
          if (a.count < b.count) {
            return 1;
          }
          if (a.count > b.count) {
            return -1;
          }
          return 0;
        });
    });
    this.search.recent().subscribe(res => {
      this.recent = res.hits;
    });
    this.search.popular().subscribe(res => {
      this.popular = res.hits;
    });
  }
}
