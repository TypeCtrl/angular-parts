import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
})
export class SubmitComponent {
  name = '';
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
  success = false;
  loading = false;

  constructor(private searchService: SearchService) {}

  onSubmit() {
    this.success = false;
    this.loading = true;
    const pack: any = {
      name: this.name,
      catagories: this.catagories.filter(n => n.checked).map(n => n.name),
    };

    this.searchService.submitPackage(pack).subscribe(
      res => {
        this.loading = false;
        console.log(res);
        this.success = true;
      },
      err => {
        this.loading = false;
        console.error(err);
      },
    );
  }
}
