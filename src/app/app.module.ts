import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCalendar,
  faArrowAltCircleDown,
  faStar,
  faFileArchive,
  faTags,
} from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchService } from './search.service';
import { HomeComponent } from './home/home.component';
import { ResultCardComponent } from './search/result-card/result-card.component';
import { DaysagoPipe } from './daysago.pipe';
import { PackageComponent } from './package/package.component';
import { SearchComponent } from './search/search.component';

library.add(faCalendar, faArrowAltCircleDown, faStar, faFileArchive, faTags);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'package/:name', component: PackageComponent },
  { path: 'package/:scope/:name', component: PackageComponent },
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbTooltipModule.forRoot(),

    FontAwesomeModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
