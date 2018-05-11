import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models';
import { Avis } from '../models';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  avisMessage = ""

  constructor() { }

  ngOnInit() {
  }

  traiterAvis(unAvis:Avis) {
    if(unAvis == Avis.AIMER) {
      this.collegue.score = this.collegue.score + 50;
    }
    if(unAvis == Avis.DETESTER) {
      this.collegue.score = this.collegue.score - 50;
    }
    this.avisMessage = "Vous avez cliquez sur " + unAvis;
  }
}
