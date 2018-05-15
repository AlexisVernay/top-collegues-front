import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Collegue, Avis, Vote } from '../models';
import { CollegueService } from "../services/collegue.service";

@Component({
  selector: 'app-collegue-detail',
  templateUrl: './collegue-detail.component.html',
  styleUrls: ['./collegue-detail.component.scss']
})
export class CollegueDetailComponent implements OnInit {
  collegue: Collegue = new Collegue("Président");
  avisMessage = ""
  enable: boolean;
  disable: boolean;

  constructor(
    private _route: ActivatedRoute,
    private CService: CollegueService
  ) {}

  ngOnInit() {
    this.CService.trouverCollegue(this._route.snapshot.paramMap.get("pseudo"))
      .then(cols => {
        this.collegue = cols;
      })
      .catch(err => console.log(err));
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
