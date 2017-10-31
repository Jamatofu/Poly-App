import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {DefiModel} from "../../model/DefiModel";

@Injectable()
export class DefiService {
  private url = "http://localhost:3000/defi";

  constructor(private http: Http) { }

  getListDefi() {
    return this.http.get(this.url).map(res => res.json());
  }

  addDefi(defi: DefiModel) {
    console.log("Défi ajouté");
    this.http.post(this.url, defi).subscribe();
  }

}
