import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullpointerPostFormComponent } from './nullpointer-post-form.component';

describe('NullpointerPostFormComponent', () => {
  let component: NullpointerPostFormComponent;
  let fixture: ComponentFixture<NullpointerPostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullpointerPostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullpointerPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
