export class MemberModel {
  public pseudo: string;
  public password: string;
  public email: string;


  constructor(pseudo: string, password: string, email: string) {
    this.pseudo = pseudo;
    this.password = password;
    this.email = email;
  }
}
