export class NewsModel {
  public _id: string;
  public content: string;
  public urlImage: string;
  public title: string;
  public date: string;


  constructor(content: string, urlImage: string, title: string, date ?: string, _id ?: string, ) {
    this._id = _id;
    this.content = content;
    this.urlImage = urlImage;
    this.title = title;
    this.date = date;
  }
}
