import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChannelListComponent} from './channel-list.component';
import {MatIconModule, MatProgressBarModule, MatTreeModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ChannelListMenuComponent', () => {
  let component: ChannelListComponent;
  let fixture: ComponentFixture<ChannelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelListComponent],
      imports: [MatTreeModule, MatIconModule, MatProgressBarModule, HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
