import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground-sidepanel',
  templateUrl: './playground-sidepanel.component.html',
  styleUrls: ['./playground-sidepanel.component.scss']
})
export class PlaygroundSidepanelComponent implements OnInit {

  @Input() lifes = 0;
  @Input() score = 0;

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  end() {
    this.router.navigate(['/']);
  }

}
