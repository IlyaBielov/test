import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedCardComponent} from './feed-card.component';
import {MatCardModule} from '@angular/material';
import {StripHtmlTagsPipe} from '@app/pipes/strip-html/strip-html-tags.pipe';

describe('FeedCardComponent', () => {
  let component: FeedCardComponent;
  let fixture: ComponentFixture<FeedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedCardComponent, StripHtmlTagsPipe],
      imports: [MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
