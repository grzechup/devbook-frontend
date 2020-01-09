import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoblogComponent } from './nanoblog.component';

describe('NanoblogComponent', () => {
  let component: NanoblogComponent;
  let fixture: ComponentFixture<NanoblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
