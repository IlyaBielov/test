import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelListMenuComponent } from './channel-list-menu.component';

describe('ChannelListMenuComponent', () => {
  let component: ChannelListMenuComponent;
  let fixture: ComponentFixture<ChannelListMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelListMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
