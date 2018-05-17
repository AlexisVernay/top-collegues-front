import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
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

  constructor(private CService: CollegueService, private router: Router) { }

  ngOnInit() {
    this.enable = this.collegue.score >= 1000;
    this.disable = this.collegue.score <= 1000;
  }

  trouverCollegue() {
    this.router.navigate(["/collegue", this.collegue.pseudo])
  }

  traiterAvis(unAvis:Avis) {
    this.CService.donnerUnAvis(this.collegue, unAvis)
      .subscribe(cols => {
        this.collegue = cols;
        this.avisMessage = "Vous avez voté " + unAvis;
        this.enable = this.collegue.score >= 1000;
        this.disable = this.collegue.score <= -1000;
      }
      , err => console.log(err));
  }
}
