import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ResultCardComponent } from '../search/result-card/result-card.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { BrowseTagComponent } from './browse-tag.component';
import { DaysagoPipe } from '../daysago.pipe';
import { SearchService } from '../search.service';


describe('BrowseTagComponent', () => {
  let component: BrowseTagComponent;
  let fixture: ComponentFixture<BrowseTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FontAwesomeModule,
        FormsModule,
      ],
      declarations: [
        BrowseTagComponent,
        SearchbarComponent,
        ResultCardComponent,
        DaysagoPipe,
      ],
      providers: [
        SearchService,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
