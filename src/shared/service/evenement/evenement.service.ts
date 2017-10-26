import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {EvenementModel} from "shared/model/EvenementModel";

@Injectable()
export class EvenementService {
  private url = "http://localhost:3000/evenement";

  constructor(private http: Http) { }


  public addEvenement(evenement: EvenementModel) {
    this.http.post(this.url, evenement).subscribe();
    console.log("Evenement ajouté " + evenement.content);
  }

  public getEvenement() {
    console.log("Récupération des évènements");
    return this.http.get(this.url).map(res => res.json());
  }
}
