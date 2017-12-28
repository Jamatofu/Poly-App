export class MemberModel {
  public _id: string;
  public pseudo: string;
  public password: string;
  public email: string;
  public admin: boolean;


  constructor(pseudo: string, password: string, email: string, admin: boolean, _id ?: string) {
    this.admin = admin;
    this._id = _id;
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
  }
}
