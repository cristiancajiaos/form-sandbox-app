import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneNumberValidationComponent } from './one-number-validation.component';

describe('OneNumberValidationComponent', () => {
  let component: OneNumberValidationComponent;
  let fixture: ComponentFixture<OneNumberValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneNumberValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneNumberValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
