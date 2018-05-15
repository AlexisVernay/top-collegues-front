import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponent } from './bandeau/bandeau.component';
import { AvisComponent } from './avis/avis.component';
import { CollegueComponent } from './collegue/collegue.component';
import { HttpClientModule } from "@angular/common/http";
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from "./menu/menu.component";
import { RouterModule, Routes } from "@angular/router";
import { CollegueService } from "./services/collegue.service";

const appRoutes: Routes = [
  { path: "accueil", component: AccueilComponent },

  { path: "demo", component: DemoComponent },

  { path: "collegue/", component: CollegueComponent },

  { path: "", redirectTo: "/accueil", pathMatch: "full" },

  { path: "**", redirectTo: "/accueil", pathMatch: "full" } // page non trouvée
  ];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    HistoriqueVotesComponent,
    AccueilComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: `reload` }),
    HttpClientModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})

export class AppModule { }
