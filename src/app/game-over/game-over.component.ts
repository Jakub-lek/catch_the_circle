import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  score: any;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      this.score = params['score'];
    });
  }

  backToMenu() {
    this.router.navigate(['/']);
  }

  saveScore() {
    
  }
}
