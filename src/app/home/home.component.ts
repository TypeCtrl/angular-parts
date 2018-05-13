import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  recent: any[] = [];
  constructor(private search: SearchService) {}
  ngOnInit() {
    this.search.recent().subscribe((res) => {
      this.recent = res.hits;
    });
  }
}
