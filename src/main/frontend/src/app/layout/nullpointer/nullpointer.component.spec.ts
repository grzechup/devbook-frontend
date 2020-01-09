import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullpointerComponent } from './nullpointer.component';

describe('NullpointerComponent', () => {
  let component: NullpointerComponent;
  let fixture: ComponentFixture<NullpointerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullpointerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullpointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
