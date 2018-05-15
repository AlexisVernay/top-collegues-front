import { Component, OnInit } from '@angular/core';
import { Collegue, Avis } from '../models';
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {
  collegues: Collegue[];

  constructor(private CService: CollegueService) { }

  onClick() {}

  ngOnInit() {
    this.CService.listerCollegues()
    .then(cols => (this.collegues = cols))
    .catch(console.log);
  }

  traiterScore(score:number) {

  }
}
