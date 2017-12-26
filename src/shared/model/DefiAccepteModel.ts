import {DefiModel} from "./DefiModel";
export class DefiAccepteModel {
  public _id: string;
  public name: string;
  public description: string;
  public nbPoint: number;
  public categorie: string;
  public reussie: boolean;


  constructor(name: string, description: string, nbPoint: number, categorie: string, reussie: boolean, id ?: string, ) {
    this.categorie = categorie;
    this._id = id;
    this.name = name;
    this.description = description;
    this.nbPoint = nbPoint;
    this.reussie = reussie;
  }
}
