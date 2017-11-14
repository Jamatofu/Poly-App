import { Injectable } from '@angular/core';
import {MemberModel} from "../../model/MemberModel";
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthentificationService {
  private url = "http://localhost:3000/authentification";
  public token: String;

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(user: MemberModel): Observable<boolean> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log(JSON.stringify({pseudo: user.pseudo, password: user.password}));
    return this.http.post(this.url, JSON.stringify({pseudo: user.pseudo, password: user.password}),  { headers: headers})
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if(token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({pseudo: user.pseudo, token: token}));
          console.log("Authentification réussie.");
          return true;
        } else {
          return false;
        }
      });
  }


}
