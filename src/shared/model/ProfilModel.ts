export class ProfilModel {
  public urlProfil: string;
  public prenom: string;
  public nom: string;
  public surnom: string;
  public sexe: boolean;
  public pseudo: string;


  constructor(pseudo: string, urlProfil: string, prenom: string, nom: string, surnom: string, sexe: boolean) {
    this.pseudo = pseudo;
    this.urlProfil = urlProfil;
    this.prenom = prenom;
    this.nom = nom;
    this.surnom = surnom;
    this.sexe = sexe;
  }
}
