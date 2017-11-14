export class MemberModel {
  public id: number;
  public pseudo: string;
  public password: string;
  public email: string;


  constructor(pseudo: string, password: string, email: string, id ?: number) {
    this.id = id;
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
  }
}
