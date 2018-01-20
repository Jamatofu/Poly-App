export class PolypotinModel {
  public _id: string;
  public content: string;
  public date: string;


  constructor(content: string, date ?: string, _id ?: string, ) {
    this._id = _id;
    this.content = content;
    this.date = date;
  }
}
