import { Component, OnInit } from '@angular/core';

import { Hero } from './../../../classes/hero/hero';
import { POWERS } from './../../../constants/powers';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-status-css-classes',
  templateUrl: './status-css-classes.component.html',
  styleUrls: ['./status-css-classes.component.css']
})
export class StatusCssClassesComponent implements OnInit {
  powers: string[] = POWERS;
  model = new Hero('', '', this.powers[0]);

  constructor(private fb: FormBuilder) { }

  heroForm = this.fb.group({
    name: [this.model.name, [Validators.required, Validators.minLength(4)]],
    alterEgo: [this.model.alterEgo],
    power: [this.model.power, [Validators.required]]
  });

  ngOnInit(): void {
  }

  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }
}
