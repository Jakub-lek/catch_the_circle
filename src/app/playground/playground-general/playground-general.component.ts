import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground-general',
  templateUrl: './playground-general.component.html',
  styleUrls: ['./playground-general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaygroundGeneralComponent implements OnInit, AfterViewInit {

  @ViewChild('sidebar', { static: true }) sidebar: ElementRef | undefined;
  sidebarWidth = 0;

  lifes = 3;
  score = 0;
  
  constructor(private cdr: ChangeDetectorRef, private readonly router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sidebarWidth = this.sidebar?.nativeElement.offsetWidth;
    this.cdr.detectChanges();
  }

  hit() {
    this.score += 1;
    this.cdr.detectChanges();
  }

  miss() {
    if ((this.lifes - 1) === 0) {
      this.router.navigate(['/game-over'], { queryParams: { score: this.score }});
    }
    this.lifes -= 1;
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
    onResize() {
    this.sidebarWidth = this.sidebar?.nativeElement.offsetWidth;
    this.cdr.detectChanges();
}
}
