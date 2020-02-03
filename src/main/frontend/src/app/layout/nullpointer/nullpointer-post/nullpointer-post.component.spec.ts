import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullpointerPostComponent } from './nullpointer-post.component';

describe('NullpointerPostComponent', () => {
  let component: NullpointerPostComponent;
  let fixture: ComponentFixture<NullpointerPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullpointerPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullpointerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
