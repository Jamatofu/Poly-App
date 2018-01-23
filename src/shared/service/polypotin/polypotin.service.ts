import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {PolypotinModel} from "../../model/PolypotinModel";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class PolypotinService {
  private url = "http://localhost:3000/polypotin";

  constructor(private  http: HttpClient) { }

  getListPolypotin(isAccepted: boolean, idPage: number) {

    return this.http.get<PolypotinModel[]>(this.url, {params: new HttpParams().append('isAccepted', String(isAccepted))
      .append('page', String(idPage))});
  }

  public addPolypotin(polypotin: PolypotinModel) {
    this.http.post(this.url, polypotin).subscribe();
  }

  public acceptPolypotin(id: string) {
    console.log(id);
    this.http.put(this.url, null, {params: new HttpParams().set('idPolypotin', id)}).subscribe();
  }

  public refusePolypotin(id: string) {
    console.log(id);
    this.http.delete(this.url, {params: new HttpParams().set('idPolypotin', id)}).subscribe();
  }

  public getNbPolypotin() {
    return this.http.get<number>("http://localhost:3000/numberPolypotin")
  }
}
