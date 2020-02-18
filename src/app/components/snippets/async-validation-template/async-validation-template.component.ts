import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { POWERS } from './../../../constants/powers';
import { Hero } from './../../../classes/hero/hero';

@Component({
  selector: 'app-async-validation-template',
  templateUrl: './async-validation-template.component.html',
  styleUrls: ['./async-validation-template.component.css']
})
export class AsyncValidationTemplateComponent implements OnInit {
  powers: string[] = POWERS;
  model = new Hero('', '', this.powers[0]);

  ngOnInit() {

  }

  onSubmit(): void {
    alert(this.model);
  }
}
