import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoblogCardComponent } from './nanoblog-card.component';

describe('NanoblogCardComponent', () => {
  let component: NanoblogCardComponent;
  let fixture: ComponentFixture<NanoblogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoblogCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoblogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
