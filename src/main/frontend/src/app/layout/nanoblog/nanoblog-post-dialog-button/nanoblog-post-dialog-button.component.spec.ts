import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoblogPostDialogButtonComponent } from './nanoblog-post-dialog-button.component';

describe('NanoblogPostDialogButtonComponent', () => {
  let component: NanoblogPostDialogButtonComponent;
  let fixture: ComponentFixture<NanoblogPostDialogButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanoblogPostDialogButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanoblogPostDialogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
