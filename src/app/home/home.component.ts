import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  recent: any[] = [];
  popular: any[] = [];
  catagories: any[] = [
    {
      name: 'Animations',
    },
    {
      name: 'Schematics',
      description: 'Boilerplate / scaffold / Yeoman / stack ensemble / seed',
    },
    {
      name: 'Layout',
      description: 'responsive, flexbox, css grid',
    },
    {
      name: 'SSR',
      description: 'serverside rendering, Universal',
    },
    {
      name: 'Core',
      description: 'replacements for @angular/core or similar',
    },
    {
      name: 'Routing',
      description: 'routing, routing permissions, auth',
    },
    {
      name: 'Overlay',
      description: 'Overlay, modal, dialog, lightbox, popup, portal',
    },
    {
      name: 'Mobile',
      description: 'mobile focused like onsen or ionic',
    },
    {
      name: 'Notification',
      description: 'Toast, snackbar, alert',
    },
    {
      name: 'Data Table',
      description: 'Table, Data Grid',
    },
    {
      name: 'Data flow',
      description: 'redux, rxjs, pipes',
    },
    {
      name: 'Practices',
      description: 'linters, code style, codelyzer',
    },
    {
      name: 'Testing',
    },
    {
      name: 'Charts',
      description: 'graphs, sparklines, d3',
    },
    {
      name: 'Scroll',
      description: 'infinite scroll',
    },
    {
      name: 'Drag',
      description: 'Drag n Drop',
    },
    {
      name: 'Http',
    },
    {
      name: 'Images',
      description: 'Carousel, lazy loading',
    },
    {
      name: 'Audio Video',
      description: 'audio video players embeders',
    },
    {
      name: 'Icons',
      description: 'svg, etc',
    },
    {
      name: 'UI Frameworks',
      description:
        'Large set of general use components used throughout application',
    },
    {
      name: 'Wrapper',
      description: 'helpers for commonjs packages',
    },
    {
      name: 'i18n',
    },
    {
      name: 'Forms',
    },
    {
      name: 'Color',
    },
    {
      name: 'Autocomplete',
    },
    {
      name: 'Date',
    },
    {
      name: 'Select',
    },
  ];

  constructor(private search: SearchService) {}

  ngOnInit() {
    this.search.recent().subscribe((res) => {
      this.recent = res.hits;
    });
    this.search.popular().subscribe((res) => {
      this.popular = res.hits;
    });
  }
}
