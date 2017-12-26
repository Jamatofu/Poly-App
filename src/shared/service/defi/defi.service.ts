import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {DefiModel} from "../../model/DefiModel";
import {Categorie} from "../../enum/Categorie";
import {DefiAccepteModel} from "../../model/DefiAccepteModel";

@Injectable()
export class DefiService {
  private url = "http://localhost:3000/defi";

  constructor(private http: Http) { }

  getListDefi(categorie: Categorie) {
    if(categorie == Categorie.VIDE) {
      return this.http.get(this.url).map(res => res.json());
    } else {
      return this.http.get(this.url + "/" + categorie).map(res => res.json());
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
}
