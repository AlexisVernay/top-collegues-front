import { Component, OnInit } from '@angular/core';
import { Vote, Collegue, Avis } from '../models';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.scss']
})
export class HistoriqueVotesComponent implements OnInit {
  votes: Vote[];

  constructor() {

  }

  onClick($vote) {
    let supprimer = this.votes.lastIndexOf($vote);
    this.votes.splice(supprimer, 1);
  }

  ngOnInit() {
    this.votes = [
      new Vote(new Collegue("Paul"), Avis.AIMER),
      new Vote(new Collegue("Clement"), Avis.DETESTER),
      new Vote(new Collegue("Julien"), Avis.AIMER)
    ];
  }
}