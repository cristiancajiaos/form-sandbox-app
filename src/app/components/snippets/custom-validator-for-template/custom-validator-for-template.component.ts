import { Component, OnInit } from '@angular/core';
import { ForbiddenNameValidator } from '../../../shared/forbidden-name-validator';

import { POWERS } from './../../../constants/powers';
import { Hero } from '../../../classes/hero/hero';

@Component({
  selector: 'app-custom-validator-for-template',
  templateUrl: './custom-validator-for-template.component.html',
  styleUrls: ['./custom-validator-for-template.component.css']
})
export class CustomValidatorForTemplateComponent implements OnInit {
  powers: string[] = POWERS;
  model = new Hero('', '', this.powers[0]);
  constructor() { }

  ngOnInit(): void {
  }

}
