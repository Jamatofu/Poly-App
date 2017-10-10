export class MemberModel {
  public id: number;
  public pseudo: string;
  public password: string;
  public email: string;


  constructor(id: number, pseudo: string, password: string, email: string) {
    this.id = id;
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
  }
}
