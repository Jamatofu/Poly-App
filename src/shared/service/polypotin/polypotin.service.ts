import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {PolypotinModel} from "../../model/PolypotinModel";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class PolypotinService {
  private url = "http://localhost:3000/polypotin";

  constructor(private  http: HttpClient) { }

  getListPolypotin(isAccepted: boolean) {

    return this.http.get<PolypotinModel[]>(this.url, {params: new HttpParams().set('isAccepted', String(isAccepted))});
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
}
