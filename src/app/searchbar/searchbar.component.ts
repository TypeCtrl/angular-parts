import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  AfterContentInit,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styles: [
    `
  input {
    font-weight: 300;
  }
  .clear {
    border-left-width: 0;
    cursor: pointer;
  }
  .input-group-text {
    color: #ced4da;
  }
  .clear:hover {
    color: #4c5565;
  }
  .form-control {
    border-left-width: 0;
  }
  `,
  ],
})
export class SearchbarComponent implements OnInit, AfterContentInit {
  @Input() query = '';
  @Output() queryChange = new EventEmitter<string>();
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  constructor(private r: Renderer2, private router: Router) {}

  ngOnInit() {}
  ngAfterContentInit() {
    this.input.nativeElement.focus();
  }
  handleQueryChange() {
    this.queryChange.emit(this.query);
    const queryParams: any = {};
    if (this.query) {
      queryParams.q = this.query;
    }
    this.router.navigate(['/search'], {
      queryParams,
      replaceUrl: this.router.url.startsWith('/search'),
    });
  }
  clear() {
    this.query = '';
    this.handleQueryChange();
  }
}
