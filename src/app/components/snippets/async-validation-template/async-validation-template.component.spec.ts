import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValidationTemplateComponent } from './async-validation-template.component';

describe('AsyncValidationTemplateComponent', () => {
  let component: AsyncValidationTemplateComponent;
  let fixture: ComponentFixture<AsyncValidationTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncValidationTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncValidationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
