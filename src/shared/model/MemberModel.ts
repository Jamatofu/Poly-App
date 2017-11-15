export class MemberModel {
  public _id: string;
  public pseudo: string;
  public password: string;
  public email: string;


  constructor(pseudo: string, password: string, email: string, _id ?: string) {
    this._id = _id;
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
  }
}
