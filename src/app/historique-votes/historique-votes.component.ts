import { Component, OnInit } from '@angular/core';
import { Vote, Collegue, Avis } from '../models';
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {
  votes: Vote[] = [];

  constructor(private _cs: CollegueService) {}

  onClick($vote) {
    let supprimer = this.votes.lastIndexOf($vote);
    this.votes.splice(supprimer, 1);
  }

  ngOnInit() {
    this._cs.subjectAvisCollegueObs.subscribe(vote => this.votes.push(vote));
  }
}
