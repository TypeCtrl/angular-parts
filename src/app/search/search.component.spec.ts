import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchComponent } from './search.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { DaysagoPipe } from '../daysago.pipe';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [],
      imports: [
        RouterTestingModule,
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        HttpClientModule,
      ],
      declarations: [
        SearchComponent,
        ResultCardComponent,
        SearchbarComponent,
        DaysagoPipe,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
