import { Component, OnInit } from '@angular/core';
import { Avis } from '../models';
import { Collegue } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  avisMessage = ""

  traiterAvis(unAvis:Avis) {
    this.avisMessage = 'Vous avez cliquez sur ' + unAvis
  }
}
