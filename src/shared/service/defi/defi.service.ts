import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {DefiModel} from "../../model/DefiModel";
import {Categorie} from "../../enum/Categorie";
import {DefiAccepteModel} from "../../model/DefiAccepteModel";
import {HttpClientTestingBackend} from "@angular/common/http/testing/src/backend";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class DefiService {
  private url = "http://localhost:3000/defi";

  constructor(private http: HttpClient) { }

  getListDefi(categorie: string, idPage: number) {
    if(categorie == '') {
      return this.http.get<DefiModel[]>(this.url, {params: new HttpParams().set('page', String(idPage))});
    } else {
      return this.http.get<DefiModel[]>(this.url + "/" + categorie, {params: new HttpParams().set('page', String(idPage))});
    }
  }

  addDefi(defi: DefiModel) {
    console.log("Défi ajouté");
    this.http.post(this.url, defi).subscribe();
  }

  acceptDefi(defi: DefiAccepteModel) {
    console.log("Défi accepté");
    this.http.post(this.url + "/accept", defi).subscribe();
  }

  getNbDefi(categorie: string) {
      return this.http.get<number>("http://localhost:3000/numberDefi", {params: new HttpParams().set('cat', categorie)});
  }
}
