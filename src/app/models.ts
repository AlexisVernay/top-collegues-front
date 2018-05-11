export enum Avis {
  AIMER = "J'aime",
  DETESTER = "Je déteste"
}

export class Collegue {
  pseudo: String;
  score: number;
  photo: String;

  constructor(pseudo){
    this.pseudo = pseudo;
    this.score = 0;
    this.photo = "assets/img/super-collegue.png";
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
