import { POWERS } from './../../../constants/powers';
import { Hero } from './../../../classes/hero/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-validation',
  templateUrl: './template-validation.component.html',
  styleUrls: ['./template-validation.component.css']
})
export class TemplateValidationComponent implements OnInit {
  model: Hero;
  powers: string[] = POWERS;

  constructor() { }

  ngOnInit(): void {
    this.model = new Hero('', '', this.powers[0]);
  }

  get foo() {
    return JSON.stringify(this.model);
  }
}
