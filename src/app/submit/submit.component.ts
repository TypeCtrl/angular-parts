import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
})
export class SubmitComponent {
  name = '';
  success = false;
  loading = false;

  constructor(private searchService: SearchService) {}

  onSubmit() {
    this.success = false;
    this.loading = true;
    const pack: any = {
      name: this.name,
      catagories: [],
    };

    this.searchService.submitPackage(pack).subscribe(
      res => {
        this.loading = false;
        this.success = true;
      },
      err => {
        this.loading = false;
      },
    );
  }
}
