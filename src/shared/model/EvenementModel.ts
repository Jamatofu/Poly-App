export class EvenementModel {
  public _id: string;
  public title: string;
  public content: string;
  public start: string;


  constructor(content: string, title: string, start ?: string, _id ?: string) {
    this._id = _id;
    this.content = content;
    this.title = title;
    this.start = start;
  }
}
