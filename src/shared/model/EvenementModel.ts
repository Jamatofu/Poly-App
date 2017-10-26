export class EvenementModel {
  public _id: string;
  public title: string;
  public content: string;
  public dateDebut: string;


  constructor(content: string, title: string, dateDebut ?: string, _id ?: string) {
    this._id = _id;
    this.content = content;
    this.title = title;
    this.dateDebut = dateDebut;
  }
}
