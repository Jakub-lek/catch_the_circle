import { FirebaseService } from './../service/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  score: any;
  nameFc: FormControl;
  saveDisabled = false;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private readonly firebase: FirebaseService) {
    this.nameFc = new FormControl('');
  }

  ngOnInit() {
    this.route.queryParams.pipe(take(1)).subscribe(params => {
      this.score = params['score'];
    });
  }

  backToMenu() {
    this.router.navigate(['/']);
  }

  saveScore() {
    this.saveDisabled = true;
    this.firebase.create({name: this.nameFc.value, score: this.score}).then(() => {
      this.router.navigate(['/']);
    });
  }
}
