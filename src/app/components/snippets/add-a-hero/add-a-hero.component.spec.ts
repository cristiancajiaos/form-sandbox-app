import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAHeroComponent } from './add-a-hero.component';

describe('AddAHeroComponent', () => {
  let component: AddAHeroComponent;
  let fixture: ComponentFixture<AddAHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
