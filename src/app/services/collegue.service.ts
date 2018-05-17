import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { error } from "selenium-webdriver";
import { Collegue, Avis, newCollegue, Vote } from "../models";
import { HttpHeaders } from "@angular/common/http";
import { Observable, Subject, ReplaySubject } from "rxjs";
import { map, filter, tap } from "rxjs/operators";
const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: "root"
})
export class CollegueService {
  private subjectAvisCollegue = new ReplaySubject<Vote>(3);

  get subjectAvisCollegueObs() {
    return this.subjectAvisCollegue.asObservable();
  }

  constructor(private _http: HttpClient) {}

  listerCollegues(): Observable<Collegue[]> {
    return (
      this._http
        .get<Collegue[]>(`${URL_BACKEND}/collegues`)
        // accorder un bonus dans mon application
        /*.pipe(
          map(cols =>
            cols.filter(c => c.score > 0).map(c => {
              c.score += 1000;
              return c;
            })
          )
        )*/
    );
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Observable<Collegue> {
    return this._http
      .patch<Collegue>(`${URL_BACKEND}/collegues/${unCollegue.pseudo}`, {
        action: avis.valueOf()
      })
      .pipe(
        tap(col => {
          // émission événement nouvel avis
          this.subjectAvisCollegue.next(new Vote(col, avis));
        })
      );
  }

  trouverCollegue(pseudo: string): Observable<Collegue> {
    return this._http.get<Collegue>(`${URL_BACKEND}/collegues/${pseudo}`);
  }

  ajouterCollegue(newCollegue: newCollegue): Observable<Collegue> {
    return this._http
    .post<Collegue>(`${URL_BACKEND}/collegues/nouveau`, newCollegue);
  }

}
