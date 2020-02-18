import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorForReactiveComponent } from './custom-validator-for-reactive.component';

describe('CustomValidatorForReactiveComponent', () => {
  let component: CustomValidatorForReactiveComponent;
  let fixture: ComponentFixture<CustomValidatorForReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomValidatorForReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidatorForReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
