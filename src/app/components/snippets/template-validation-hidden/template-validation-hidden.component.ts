import { Component, OnInit } from '@angular/core';
import { POWERS } from './../../../constants/powers';
import { Hero } from './../../../classes/hero/hero';

@Component({
  selector: 'app-template-validation-hidden',
  templateUrl: './template-validation-hidden.component.html',
  styleUrls: ['./template-validation-hidden.component.css']
})
export class TemplateValidationHiddenComponent implements OnInit {
  powers: string[] = POWERS;
  model: Hero = new Hero('', '', this.powers[0]);

  constructor() {}

  ngOnInit(): void {

  }

  onSubmit(): void {
    alert(`Name: ${this.model.name}`);
  }

  get foo() {
    return JSON.stringify(this.model);
  }
}
