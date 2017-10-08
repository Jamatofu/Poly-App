import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {MemberModel} from "../../app/authentification/MemberModel";

@Injectable()
export class AuthentificationService {
  private url = "http://localhost:3000/member";

  constructor(private http: Http) { }

  public login(pseudo: string, password: string): Observable<MemberModel> {
    return this.http.get(this.url).map(res => res.json());
  }

}
