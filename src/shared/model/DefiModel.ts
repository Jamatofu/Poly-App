export class DefiModel {
  public _id: string;
  public name: string;
  public description: string;
  public nbPoint: number;
  public categorie: string;


  constructor(name: string, description: string, nbPoint: number, categorie: string, id ?: string, ) {
    this.categorie = categorie;
    this._id = id;
    this.name = name;
    this.description = description;
    this.nbPoint = nbPoint;
  }
}
