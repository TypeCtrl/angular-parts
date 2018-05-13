import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTagComponent } from './browse-tag.component';

describe('BrowseTagComponent', () => {
  let component: BrowseTagComponent;
  let fixture: ComponentFixture<BrowseTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseTagComponent ]
    })
    .compileComponents();
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
