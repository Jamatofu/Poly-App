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

  totalItems: number = 60;
  currentPage = 1;
  itemPerPage: number = 5;
  maxSize: number = 5;

  constructor(private newsService: NewsService) {
    this.newsService.getNbNews().subscribe(nb => {console.log(nb); this.totalItems = nb});
    this.newsService.getNews(0).subscribe(newList => this.newsList = newList);
  }

  ngOnInit() {
  }

  pageChanged(event: any): void {
    console.log(event.page);
    this.newsService.getNews(event.page - 1).subscribe(newList => this.newsList = newList);
  }
}
