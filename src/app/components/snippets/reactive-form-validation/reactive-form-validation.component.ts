import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/classes/hero/hero';
import { POWERS } from './../../../constants/powers';

import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css']
})
export class ReactiveFormValidationComponent implements OnInit {
  powers: string[] = POWERS;
  model: Hero = new Hero('', '', this.powers[0]);
  heroForm = new FormGroup({
    name: new FormControl(this.model.name, [Validators.required, Validators.minLength(4)]),
    alterEgo: new FormControl(this.model.alterEgo),
    power: new FormControl(this.model.power, [Validators.required])
  });

  constructor() {

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    alert(`Name: ${this.model.name}`);
  }

  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }

  get foo() {
    return JSON.stringify(this.model);
  }
}
