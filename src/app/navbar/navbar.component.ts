import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navbar.component.html',
  styles: [`
  .navbar-brand {
    font-weight: 800;
  }
  .bg-custom {
    background: #c3002f;
  }
  .github {
    font-size: 0.7937rem;
    padding: 0.8rem;
  }
  `],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
