import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldValidationReactiveComponent } from './cross-field-validation-reactive.component';

describe('CrossFieldValidationReactiveComponent', () => {
  let component: CrossFieldValidationReactiveComponent;
  let fixture: ComponentFixture<CrossFieldValidationReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossFieldValidationReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossFieldValidationReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
