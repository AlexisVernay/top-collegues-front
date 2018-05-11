import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {
  @Output() avis = new EventEmitter<Avis>();

  constructor() { }

  ngOnInit() {
  }

  aimer() {
    this.avis.emit(Avis.AIMER);
  }

  detester() {
    this.avis.emit(Avis.DETESTER);
  }
}
