import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SNIPPETS } from 'src/app/constants/mock-snippets';
import { Snippet } from 'src/app/interfaces/snippet';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  route: string;
  snippets: Snippet[];

  constructor(location: Location, router: Router) { 
    router.events.subscribe(val => {
      if (location.path() != '') {
        this.route = location.path();
      } else {
        this.route = 'home';
      }
    });
  }

  ngOnInit(): void {
    this.snippets = SNIPPETS;
  }

}
