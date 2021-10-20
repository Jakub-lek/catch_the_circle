import { ShapeGeneratorService } from './../../service/shape-generator.service';
import { Component, OnChanges, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { Input } from '@angular/core';

@Component({
  selector: 'app-playground-desk',
  templateUrl: './playground-desk.component.html',
  styleUrls: ['./playground-desk.component.scss']
})
export class PlaygroundDeskComponent implements OnInit, OnChanges {

  shape$ = new Subject<{name: string, shape: any}>();
  shapePosition$ = new Subject();

  @Input() sidebarWidth = 0;

  @Output() lifesEvent = new EventEmitter();
  @Output() scoreEvent = new EventEmitter();

  constructor(private readonly shapeGenerator: ShapeGeneratorService) {
  }

  ngOnInit() {
    
    setInterval(() => {
      
      const theRandomNumber = Math.floor(Math.random() * 10) + 1;
      switch(theRandomNumber) {
        case 1:
        case 2:
        case 3: {
          this.shape$.next({name: 'circle', shape: this.shapeGenerator.circle})
          break;
        }
        case 4:
        case 5: {
          this.shape$.next({name: 'square', shape: this.shapeGenerator.square})
          break;
        }
        case 6: {
          this.shape$.next({name: 'rectangle', shape: this.shapeGenerator.rectangle})
          break;
        }
        case 7: {
          this.shape$.next({name: 'triangleUp', shape: this.shapeGenerator.triangleUp})
          break;
        }
        case 8: {
          this.shape$.next({name: 'triangleDown', shape: this.shapeGenerator.triangleDown})
          break;
        }
        case 9: {
          this.shape$.next({name: 'triangleLeft', shape: this.shapeGenerator.triangleLeft})
          break;
        }
        case 10: {
          this.shape$.next({name: 'triangleRight', shape: this.shapeGenerator.triangleRight})
          break;
        }
      }
    }, 1000);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.sidebarWidth) {
      this.shapeGenerator.setWindowWidth(changes.sidebarWidth.currentValue);
    }
  }

  hit(name: string) {
    if (name === 'circle') {
      this.scoreEvent.emit(undefined);
    } else {
      this.lifesEvent.emit(undefined);
    }
  }
}
