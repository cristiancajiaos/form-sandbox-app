import { POWERS } from './../../../constants/powers';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  powers: string[] = POWERS;

  constructor() { }

  ngOnInit(): void {
  }

}
