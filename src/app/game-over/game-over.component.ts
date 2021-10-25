import { FirebaseService } from './../service/firebase.service';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
=======
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
>>>>>>> 4eddee9232015ad21dc1a799e0e27ae7436407b1

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  score: any;
  nameFc: FormControl;
<<<<<<< HEAD
  saveDisabled = false;
=======
>>>>>>> 4eddee9232015ad21dc1a799e0e27ae7436407b1

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
<<<<<<< HEAD
    
    this.saveDisabled = true;
    this.firebase.saveScore({name: this.nameFc.value, value: this.score}).subscribe(() => {
      this.router.navigate(['/']);
    });
=======
    this.firebase.saveScore({name: this.nameFc.value, value: this.score}).subscribe();
>>>>>>> 4eddee9232015ad21dc1a799e0e27ae7436407b1
  }
}
