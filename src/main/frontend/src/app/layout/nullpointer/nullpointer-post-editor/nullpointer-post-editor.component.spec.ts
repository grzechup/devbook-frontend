import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullpointerPostEditorComponent } from './nullpointer-post-editor.component';

describe('NullpointerPostEditorComponent', () => {
  let component: NullpointerPostEditorComponent;
  let fixture: ComponentFixture<NullpointerPostEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullpointerPostEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullpointerPostEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
