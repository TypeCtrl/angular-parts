import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-package',
  templateUrl: 'package.component.html',
})
export class PackageComponent implements OnInit {
  name = '';
  package?: any;
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
      this.setup();
    });
  }
  setup () {
    this.search.single(this.name).subscribe(res => {
      this.package = res.hits[0];
      this.search.readme(this.package.repositoryUrl).subscribe(readme => {
        this.readme = this.sanitizer.bypassSecurityTrustHtml(readme);
      });
    });
  }
}
