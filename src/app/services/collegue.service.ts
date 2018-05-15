import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { error } from "selenium-webdriver";
import { Collegue, Avis } from "../models";
import { HttpHeaders } from "@angular/common/http";
const URL_BACKEND = environment.backendUrl;

@Injectable({
  providedIn: "root"
})
export class CollegueService {
  constructor(private _http: HttpClient) {}
  listerCollegues(): Promise<Collegue[]> {
    return this._http.get<Collegue[]>(`${URL_BACKEND}/Collegues`).toPromise();
    // récupérer la liste des collègues côté serveur
  }
  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    return this._http
      .patch<Collegue>(`${URL_BACKEND}/Collegues/${unCollegue.pseudo}`, {
        action: avis.valueOf()
      })
      .toPromise();
  }
}
