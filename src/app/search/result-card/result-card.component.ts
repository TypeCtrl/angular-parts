import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styles: [`
  a {
    text-decoration: none;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultCardComponent {
  @Input() result: any = {};
}
