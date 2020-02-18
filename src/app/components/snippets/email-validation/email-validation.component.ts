import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

import { ValidateNotNull } from '../../../shared/validators/not-null-validator';

@Component({
  selector: 'app-email-validation',
  templateUrl: './email-validation.component.html',
  styleUrls: ['./email-validation.component.css']
})
export class EmailValidationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  emailForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Email sent!');
  }

  get email() {
    return this.emailForm.get('email');
  }

}
