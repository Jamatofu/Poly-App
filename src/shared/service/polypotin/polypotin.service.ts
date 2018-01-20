import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PolypotinService {
  private url = "http://localhost:3000/polypotin";

  constructor(private  http: Http) { }

  getListPolypotin() {
    return this.http.get(this.url).map(res => res.json());
  }

}
