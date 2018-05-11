import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {
  collegues: Collegue[];

  constructor() { }

  ngOnInit() {
    this.collegues = [new Collegue("Maxime"), new Collegue("Alexis"), new Collegue("Cyril"), new Collegue("Mehdi"), new Collegue("Clément"), new Collegue("Julien"), new Collegue("Fabien")];
  }

  traiterScore(score:number) {

  }
}
