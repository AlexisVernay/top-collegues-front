import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { error } from "selenium-webdriver";
import { Collegue, Avis, newCollegue } from "../models";
import { HttpHeaders } from "@angular/common/http";
const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: "root"
})
export class CollegueService {
  constructor(private _http: HttpClient) {}
  listerCollegues(): Promise<Collegue[]> {
    return this._http.get<Collegue[]>(`${URL_BACKEND}/collegues`).toPromise();
    // récupérer la liste des collègues côté serveur
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    return this._http
      .patch<Collegue>(`${URL_BACKEND}/collegues/${unCollegue.pseudo}`, {
        action: avis.valueOf()
      })
      .toPromise();
  }

  trouverCollegue(pseudo: string): Promise<Collegue> {
    return this._http
    .get<Collegue>(`${URL_BACKEND}/collegues/${pseudo}`)
    .toPromise();
  }

  ajouterCollegue(newCollegue: newCollegue): Promise<Collegue> {
    return this._http
    .post<Collegue>(`${URL_BACKEND}/collegues/nouveau`, newCollegue)
    .toPromise();
  }

}
