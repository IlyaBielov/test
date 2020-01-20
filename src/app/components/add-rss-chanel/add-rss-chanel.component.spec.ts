import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddRssChanelComponent} from './add-rss-chanel.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AddRssChanelComponent', () => {
  let component: AddRssChanelComponent;
  let fixture: ComponentFixture<AddRssChanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddRssChanelComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRssChanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
