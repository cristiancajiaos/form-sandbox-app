import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldValidationTemplateComponent } from './cross-field-validation-template.component';

describe('CrossFieldValidationTemplateComponent', () => {
  let component: CrossFieldValidationTemplateComponent;
  let fixture: ComponentFixture<CrossFieldValidationTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossFieldValidationTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossFieldValidationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
