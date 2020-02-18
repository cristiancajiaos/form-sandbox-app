import { Component, OnInit } from '@angular/core';

import { POWERS } from './../../../constants/powers';
import { Hero } from './../../../classes/hero/hero';

@Component({
  selector: 'app-cross-field-validation-template',
  templateUrl: './cross-field-validation-template.component.html',
  styleUrls: ['./cross-field-validation-template.component.css']
})
export class CrossFieldValidationTemplateComponent implements OnInit {
  powers: string[] = POWERS;
  model = new Hero('', '', this.powers[0]);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Form sent');
    this.resetHero();
  }

  resetHero(): void {
    this.model = new Hero('', '', this.powers[0]);
  }
}
