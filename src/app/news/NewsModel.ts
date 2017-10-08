export class NewsModel {
  public content: string;
  public urlImage: string;
  public title: string;
  public date: string;


  constructor(content: string, urlImage: string, title: string, date: string) {
    this.content = content;
    this.urlImage = urlImage;
    this.title = title;
    this.date = date;
  }
}
