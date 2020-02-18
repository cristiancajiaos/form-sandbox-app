import { Hero } from './../../../classes/hero/hero';
import { POWERS } from './../../../constants/powers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-a-hero',
  templateUrl: './add-a-hero.component.html',
  styleUrls: ['./add-a-hero.component.css']
})
export class AddAHeroComponent implements OnInit {
  powers: string[] = POWERS;
  model: Hero;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.model = new Hero('', '', this.powers[0]);
  }

  onSubmit() {
    this.submitted = true;
  }

  editForm() {
    this.submitted = false;
  }

  get foo() {
    return JSON.stringify(this.model);
  }
}
