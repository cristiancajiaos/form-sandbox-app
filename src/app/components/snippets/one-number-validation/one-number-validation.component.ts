import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

import { ValidateOneNumber } from '../../../shared/validators/one-number.validation';

@Component({
  selector: 'app-one-number-validation',
  templateUrl: './one-number-validation.component.html',
  styleUrls: ['./one-number-validation.component.css']
})
export class OneNumberValidationComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  textForm = this.fb.group({
    myText: ['', [Validators.required, ValidateOneNumber]]
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Form submitted');
  }

  get myText() {
    return this.textForm.get('myText');
  }

}
