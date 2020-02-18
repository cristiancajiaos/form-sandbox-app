import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnCustomValidatorComponent } from './own-custom-validator.component';

describe('OwnCustomValidatorComponent', () => {
  let component: OwnCustomValidatorComponent;
  let fixture: ComponentFixture<OwnCustomValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnCustomValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnCustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
