import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HomeComponent } from './home/home.component';
import { ResultCardComponent } from './search/result-card/result-card.component';
import { DaysagoPipe } from './daysago.pipe';
import { PackageComponent } from './package/package.component';
import { SearchComponent } from './search/search.component';
import { BrowseTagComponent } from './browse-tag/browse-tag.component';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FontAwesomeModule,
        NgbTooltipModule.forRoot(),
        Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        SearchbarComponent,
        HomeComponent,
        ResultCardComponent,
        DaysagoPipe,
        PackageComponent,
        SearchComponent,
        BrowseTagComponent,
        FooterComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
