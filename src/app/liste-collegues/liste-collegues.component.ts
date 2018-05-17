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
  saisiePseudo:string;

  constructor(private CService: CollegueService) {
    this.saisiePseudo = "";
  }

  ngOnInit() {
    this.CService.listerCollegues().subscribe(
      cols => (this.collegues = cols),
      console.log
    );
  }
}
