export class MessageModel {
  public title: string;
  public content: string;
  public date: string;
  public idSender: string;
  public idReceiver: string;
  public pseudoSender: string;
  public _id: string;


  constructor(title: string, content: string,idSender: string, idReceiver: string, pseudoSender?: string,  date?: string,  id?: string) {
    this.title = title;
    this.content = content;
    this.date = date;
    this.idSender = idSender;
    this.idReceiver = idReceiver;
    this._id = id;
    this.pseudoSender = pseudoSender;
  }
}
