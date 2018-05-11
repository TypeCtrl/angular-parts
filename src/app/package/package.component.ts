import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-package',
  templateUrl: 'package.component.html',
  styles: [`

  `],
})
export class PackageComponent implements OnInit {
  name = '';
  readme: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private search: SearchService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const scope = params.scope ? params.scope + '/' : '';
      this.name = scope + params.name;
    });
    this.search.readme().subscribe(res => {
      this.readme = this.sanitizer.bypassSecurityTrustHtml(res);
    });
  }
}
