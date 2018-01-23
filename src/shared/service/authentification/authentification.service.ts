import { Injectable } from '@angular/core';
import {MemberModel} from "../../model/MemberModel";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ProfilModel} from "../../model/ProfilModel";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class AuthentificationService {
  private url = "http://localhost:3000/authentification";
  public token: String;

  public profil: ProfilModel;

  constructor(private http: HttpClient) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(user: MemberModel): Observable<boolean> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    console.log(JSON.stringify({pseudo: user.pseudo, password: user.password}));
    return this.http.post(this.url, JSON.stringify({pseudo: user.pseudo, password: user.password}),  { headers: headers})
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if(token) {
          this.token = token;
          let id = response.json().id;
          let admin: boolean = response.json().admin;

          localStorage.setItem('currentUser', JSON.stringify({pseudo: user.pseudo, admin: admin, token: token, id: id}));
          console.log("Authentification réussie. Id : " + id + " " + user.pseudo);
          return true;
        } else {
          return false;
        }
      });
  }

  addMember(user: MemberModel) {
    console.log("Ajout du membre : " + JSON.stringify(user));
    this.http.post("http://localhost:3000/member", user).subscribe();
  }

  addProfil(profil: ProfilModel) {
    console.log("Ajout du profil : " + JSON.stringify(profil));
    this.http.post("http://localhost:3000/profil", profil).subscribe();
  }

  getProfil(pseudo: string) {
    return this.http.get<ProfilModel>("http://localhost:3000/profil/" + pseudo);
  }


}
