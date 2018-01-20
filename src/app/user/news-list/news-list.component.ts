import { Component, OnInit } from '@angular/core';
import {NewsModel} from "../../../shared/model/NewsModel";
import {NewsService} from "../../../shared/service/news/news.service";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public newsList: NewsModel[] = [];
  public $newsList: Observable<NewsModel[]>;
  private errorMessage: string;

  constructor(private newsService: NewsService) {
    this.$newsList = new ReplaySubject(1);
  }

  ngOnInit() {
    this.$newsList = this.newsService.getNews();
    this.$newsList.subscribe(
      newsList => this.newsList = newsList,
      error => this.errorMessage = <any>error
    );
  }

}
