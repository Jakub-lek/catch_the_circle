import { ScoreDialogComponent } from './../score/score-dialog.component';
import { FirebaseService } from './../service/firebase.service';
import { ShapeGeneratorService } from './../service/shape-generator.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  circles: any[] = [];

  constructor(private readonly router: Router, private readonly shapeGenerator: ShapeGeneratorService, private readonly firebase: FirebaseService, public dialog: MatDialog) {
    shapeGenerator.setWindowWidth(0);
  }

  ngOnInit() {
    for (let i = 0; i < 85; i++) {
      this.circles.push(this.shapeGenerator.getCircle());
    }
  }

  onStartClick() {
    this.router.navigate(['play']);
  }

  showScore() {
    this.firebase.getScore().subscribe(score => {
      this.dialog.open(ScoreDialogComponent, {
        data: score,
        height: 'min-content'
      });
    });
  }

  @HostListener('window:resize', ['$event'])
    onResize() {
      window.location.reload();
  }
}
