import { Component, OnInit } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value = "";

  buttonAvis(avis) {
    if(avis == "AIMER") {
      this.value = "Vous avez cliquez sur " + (Avis.AIMER);
    }
    if(avis == "DETESTER") {
      this.value = "Vous avez cliquez sur " + (Avis.DETESTER);
    }
  }
}
