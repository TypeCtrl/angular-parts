import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private gtm: Angulartics2GoogleTagManager) {}

  ngOnInit() {}
}
