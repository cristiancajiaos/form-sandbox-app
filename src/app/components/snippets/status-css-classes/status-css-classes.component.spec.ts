import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCssClassesComponent } from './status-css-classes.component';

describe('StatusCssClassesComponent', () => {
  let component: StatusCssClassesComponent;
  let fixture: ComponentFixture<StatusCssClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusCssClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCssClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
