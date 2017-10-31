export class DefiModel {
  public _id: string;
  public name: string;
  public description: string;
  public nbPoint: number;


  constructor(name: string, description: string, nbPoint: number, id ?: string, ) {
    this._id = id;
    this.name = name;
    this.description = description;
    this.nbPoint = nbPoint;
  }
}
