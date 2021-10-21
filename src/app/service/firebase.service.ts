import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const FIREBASE_URL = 'https://catch-the-circle-16433-default-rtdb.europe-west1.firebasedatabase.app/score.json';

@Injectable({
    providedIn: "root"
})
export class FirebaseService {
    constructor(private readonly http: HttpClient) {
    }

    getScore() {
        return this.http.get(FIREBASE_URL);
    }

    saveScore(score: {name: string, value: number}) {
        return this.http.post(FIREBASE_URL, score);
    }
}