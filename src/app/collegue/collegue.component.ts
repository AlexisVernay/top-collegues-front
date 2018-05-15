import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models';
import { Avis } from '../models';
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  @Input() collegue: Collegue;
  avisMessage = ""
  enable: boolean;
  disable: boolean;

  constructor(private CService: CollegueService) { }

  ngOnInit() {
    this.enable = this.collegue.score >= 1000;
    this.disable = this.collegue.score <= 1000;
  }

  traiterAvis(unAvis:Avis) {
    this.CService.donnerUnAvis(this.collegue, unAvis)
      .then(cols => {
        this.collegue = cols;
        this.avisMessage = "Vous avez voté " + unAvis;
        this.enable = this.collegue.score >= 1000;
        this.disable = this.collegue.score <= -1000;
      })
      .catch(err => console.log(err));
  }
}