import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs/ReplaySubject";
import {NewsModel} from "../../model/NewsModel";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {AuthentificationService} from "../authentification/authentification.service";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class NewsService {
  public newsList: NewsModel[];
  public $newsList: ReplaySubject<NewsModel>;
  private url = "http://localhost:3000/news";


  constructor(private http: HttpClient) {
  }

  public getNews(idPage: number){
    return this.http.get<NewsModel[]>(this.url, {params: new HttpParams().set('page', String(idPage))});
  }

  public getOneNews(idNews: string) {
    let url = this.url + "/" + idNews;
    return this.http.get<NewsModel>(url);
  }

  public getNbNews() {
    let url = "http://localhost:3000/numberNews";
    return this.http.get<number>(url);
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  public addNews(news: NewsModel) {
    console.log('Ajout d\'une news');
    this.http.post(this.url, news).subscribe();
  }
}
