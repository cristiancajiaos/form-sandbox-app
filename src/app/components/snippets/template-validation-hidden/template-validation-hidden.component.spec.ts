import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateValidationHiddenComponent } from './template-validation-hidden.component';

describe('TemplateValidationHiddenComponent', () => {
  let component: TemplateValidationHiddenComponent;
  let fixture: ComponentFixture<TemplateValidationHiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateValidationHiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateValidationHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
