import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [`
  .navbar-brand {
    font-weight: 800;
  }
  .navbar {
    border-bottom: 1px solid black;
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
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
