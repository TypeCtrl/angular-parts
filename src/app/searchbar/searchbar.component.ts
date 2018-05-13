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
  }
  .form-control {
    border-left-width: 0;
    border-right-width: 0;
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
  handleQueryChange(q: string) {
    this.queryChange.emit(q);
    this.router.navigate(['/search'], {
      queryParams: { q },
      replaceUrl: this.router.url.startsWith('/search'),
    });
  }
}
