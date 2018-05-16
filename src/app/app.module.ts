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
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'package/:name', component: PackageComponent },
  { path: 'package/:scope/:name', component: PackageComponent },
  { path: 'tag/:tag', component: BrowseTagComponent },
  { path: 'submit', component: SubmitComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
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
    SubmitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbTooltipModule.forRoot(),

    FontAwesomeModule,
    Angulartics2Module.forRoot([Angulartics2GoogleTagManager]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
