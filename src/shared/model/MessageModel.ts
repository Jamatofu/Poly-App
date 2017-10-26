export class MessageModel {
  public title: string;
  public content: string;
  public sendDate: string;
  public idSender: string;
  public idReceiver: string;
  public _id: string;


  constructor(title: string, content: string, sendDate: string, idSender: string, idReceiver: string, id?: string) {
    this.title = title;
    this.content = content;
    this.sendDate = sendDate;
    this.idSender = idSender;
    this.idReceiver = idReceiver;
    this._id = id;
  }
}
