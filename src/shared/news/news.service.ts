import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs/ReplaySubject";
import {NewsModel} from "../../app/news/NewsModel";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {AuthentificationService} from "../authentification/authentification.service";

@Injectable()
export class NewsService {
  public newsList: NewsModel[];
  public $newsList: ReplaySubject<NewsModel>;
  private url = "http://localhost:3000/news";


  constructor(private http: Http, private authentificationService: AuthentificationService) {
  }

  public getNews(){
    console.log("No");
    return this.http.get(this.url).map(res => res.json());
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
