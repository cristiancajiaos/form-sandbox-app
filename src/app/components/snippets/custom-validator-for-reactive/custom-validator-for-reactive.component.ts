import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { POWERS } from './../../../constants/powers';
import { Hero } from './../../../classes/hero/hero';

import { ForbiddenNameDirective } from '../../../shared/directives/forbidden-name/forbidden-name.directive';
import { ForbiddenNameValidator } from 'src/app/shared/forbidden-name-validator';

@Component({
  selector: 'app-custom-validator-for-reactive',
  templateUrl: './custom-validator-for-reactive.component.html',
  styleUrls: ['./custom-validator-for-reactive.component.css']
})
export class CustomValidatorForReactiveComponent implements OnInit {
  powers: string[] = POWERS;
  model: Hero = new Hero('', '', this.powers[0]);

  heroForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      ForbiddenNameValidator(/bob/i)
    ]),
    alterEgo: new FormControl(''),
    power: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {

  }

  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }

}
