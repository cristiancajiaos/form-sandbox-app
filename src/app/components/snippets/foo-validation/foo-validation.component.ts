import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

import { ValidateFoo } from '../../../shared/validators/foo.validator';

@Component({
  selector: 'app-foo-validation',
  templateUrl: './foo-validation.component.html',
  styleUrls: ['./foo-validation.component.css']
})
export class FooValidationComponent implements OnInit {
  fooForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.fooForm = this.fb.group({
      foo: ['', [Validators.required, ValidateFoo]]
    });
  }

  onSubmit(): void {
    alert(this.fooForm.value);
  }

  get foo() {
    return this.fooForm.get('foo');
  }

}
