import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullpointerPostCardComponent } from './nullpointer-post-card.component';

describe('NullpointerPostCardComponent', () => {
  let component: NullpointerPostCardComponent;
  let fixture: ComponentFixture<NullpointerPostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullpointerPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullpointerPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
