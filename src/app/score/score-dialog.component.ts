import { ShapeGeneratorService } from './../service/shape-generator.service';
import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface ScoreData {
    name: string;
    value: number;
}

@Component({
    selector: 'app-score',
    templateUrl: './score-dialog.component.html',
    styleUrls: ['./score-dialog.component.scss']
  })
export class ScoreDialogComponent {
    scores: ScoreData[] = [];
    circles: any = []

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, readonly shapeGenerator: ShapeGeneratorService) {
        this.scores = Object.values(data);
        for (let i = 0; i < 5; i++) {
            this.circles.push(shapeGenerator.getCircle(10, 10, false));
        }
    }
}