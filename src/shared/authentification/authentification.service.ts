import { Injectable } from '@angular/core';
import {MemberModel} from "../../app/authentification/MemberModel";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthentificationService {
  private url = "http://localhost:3000/member";
  public result: MemberModel;

  constructor(private http: HttpClient) { }

  public login(pseudo: string) {

    console.log('pseudo : ' + pseudo);
    let parameters = new URLSearchParams();
    parameters.append('pseudo', pseudo);


    this.http.post(this.url, parameters)
              .subscribe(data => console.log("xD => " + data));
  }

}
