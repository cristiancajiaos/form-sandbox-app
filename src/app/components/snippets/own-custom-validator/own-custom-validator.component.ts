import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

import { Link } from './../../../classes/link/link';
import { ValidateUrl } from '../../../shared/validators/url.validator';

@Component({
  selector: 'app-own-custom-validator',
  templateUrl: './own-custom-validator.component.html',
  styleUrls: ['./own-custom-validator.component.css']
})
export class OwnCustomValidatorComponent implements OnInit {
  model = new Link('', '');
  linkForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.linkForm = this.fb.group({
      url: [this.model.url, [Validators.required, ValidateUrl]],
      title: [this.model.title, [Validators.required]]
    });
  }

  get url() {
    return this.linkForm.get('url');
  }

  get title() {
    return this.linkForm.get('title');
  }

}
