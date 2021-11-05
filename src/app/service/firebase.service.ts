import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { map, take, tap } from "rxjs/operators";
import { ScoreData } from "../score/score-dialog.component";

@Injectable({
    providedIn: "root"
})
export class FirebaseService {

    scoreRef: AngularFireList<ScoreData>;
    constructor(private db: AngularFireDatabase) {
        this.scoreRef = db.list('/score');
    }

    getScores() {
        return this.scoreRef.snapshotChanges().pipe(
            map(scores => scores.map(score => ({ name: score.payload.val()?.name, score: score.payload.val()?.score })            
                )
            )
        )
    }

    getTopFive() {
        return this.getScores().pipe(
            take(1),
            map(scores => scores.sort((n1, n2) => {
                if (n1?.score && n2?.score) {
                    return n2.score - n1.score
                };
                return 0;
            })),
            map(scores => scores.slice(0, 5)),
            );
    }

    create(score: ScoreData): any {
        return this.scoreRef.push(score);
    }
    
    update(key: string, value: any): Promise<void> {
    return this.scoreRef.update(key, value);
    }
    
    delete(key: string): Promise<void> {
    return this.scoreRef.remove(key);
    }

    deleteAll(): Promise<void> {
    return this.scoreRef.remove();
    }
}