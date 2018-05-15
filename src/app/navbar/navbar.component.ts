import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navbar.component.html',
  styles: [`
  .github {
    font-size: 0.7937rem;
    padding: 0.8rem;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
