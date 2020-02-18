import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorForTemplateComponent } from './custom-validator-for-template.component';

describe('CustomValidatorForTemplateComponent', () => {
  let component: CustomValidatorForTemplateComponent;
  let fixture: ComponentFixture<CustomValidatorForTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomValidatorForTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidatorForTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
