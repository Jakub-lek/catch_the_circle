import { ShapeGeneratorService } from './../service/shape-generator.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  circles: any[] = [];

  constructor(private readonly router: Router, private readonly shapeGenerator: ShapeGeneratorService) {
    shapeGenerator.setWindowWidth(0);
  }

  ngOnInit() {
    for (let i = 0; i < 85; i++) {
      this.circles.push(this.shapeGenerator.circle);
    }
  }

  onStartClick() {
    this.router.navigate(['play']);
  }

  showScore() {
    
  }

  @HostListener('window:resize', ['$event'])
    onResize() {
      window.location.reload();
  }
}
