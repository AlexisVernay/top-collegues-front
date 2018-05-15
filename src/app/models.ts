export enum Avis {
  AIMER = "AIMER",
  DETESTER = "DETESTER"
}

export class Collegue {
  pseudo: String;
  score: number;
  photo: String;
  nom: String;
  prenom: String;
  email: String;
  adresse: String;

  constructor(pseudo, prenom, nom){
    this.pseudo = pseudo;
    this.score = 0;
    this.photo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Patrice_de_MacMahon_crop.jpg/220px-Patrice_de_MacMahon_crop.jpg";
    this.nom = "De Mac Mahon";
    this.prenom = "Patrice";
    this.email = "patrice.de-mac-mahon@republique.fr";
    this.adresse = "Paris, Place de la République"
  }
}

export class Vote {
  collegue: Collegue;
  avis: Avis;

  constructor(collegue: Collegue, avis: Avis){
    this.collegue = collegue;
    this.avis = avis;
  }
}
