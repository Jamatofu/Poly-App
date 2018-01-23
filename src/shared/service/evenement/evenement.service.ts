import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {EvenementModel} from "shared/model/EvenementModel";
import {Observable} from "rxjs/Observable";
import {CalendarEvent} from "angular-calendar";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EvenementService {
  private url = "http://localhost:3000/evenement";

  constructor(private http: HttpClient) { }


  public addEvenement(evenement: EvenementModel) {
    this.http.post(this.url, evenement).subscribe();
    console.log("Evenement ajouté " + evenement.content);
  }

  public getEvenement() {
    return this.http.get<EvenementModel[]>(this.url);
  }
}
