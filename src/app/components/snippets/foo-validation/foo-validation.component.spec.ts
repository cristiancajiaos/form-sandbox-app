import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooValidationComponent } from './foo-validation.component';

describe('FooValidationComponent', () => {
  let component: FooValidationComponent;
  let fixture: ComponentFixture<FooValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
