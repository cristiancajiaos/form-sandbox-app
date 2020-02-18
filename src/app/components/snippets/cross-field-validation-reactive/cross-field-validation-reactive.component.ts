import { POWERS } from './../../../constants/powers';
import { Hero } from './../../../classes/hero/hero';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

import { identityRevealedValidator } from './../../../shared/validators/identity-revealed.validator';

@Component({
  selector: 'app-cross-field-validation-reactive',
  templateUrl: './cross-field-validation-reactive.component.html',
  styleUrls: ['./cross-field-validation-reactive.component.css']
})
export class CrossFieldValidationReactiveComponent implements OnInit {

  powers: string[] = POWERS;
  model: Hero = new Hero('', '', this.powers[0]);
  heroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.heroForm = this.fb.group({
      name: [this.model.name, [Validators.required]],
      alterEgo: [this.model.alterEgo],
      power: [this.model.power]
    }, {
      validators: identityRevealedValidator
    });
  }

  onSubmit(): void {
    alert(this.heroForm.value);
  }

  get name() {
    return this.heroForm.get('name');
  }

  get alterEgo() {
    return this.heroForm.get('alterEgo');
  }

  get power() {
    return this.heroForm.get('power');
  }


}
