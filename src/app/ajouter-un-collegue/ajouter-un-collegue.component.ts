import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Collegue, newCollegue } from '../models';
import { CollegueService } from "../services/collegue.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html'
})

export class AjouterUnCollegueComponent implements OnInit {
  newCollegue: newCollegue = new newCollegue();
  error: string = " ";

  constructor(private CService: CollegueService, private router: Router) { }

  submit() {
    this.CService.ajouterCollegue(this.newCollegue).subscribe((col: Collegue) => {
      this.router.navigate(["/accueil"]);
   }, err => (this.error = err.error));
  }

  ngOnInit() {
    this.newCollegue.matricule = "";
    this.newCollegue.pseudo = "";
  }

}
