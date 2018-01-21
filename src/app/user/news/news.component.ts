import {Component, Input, OnInit} from '@angular/core';
import {NewsModel} from "../../../shared/model/NewsModel";
import {ActivatedRoute, Params} from "@angular/router";
import {NewsService} from "../../../shared/service/news/news.service";
import {isUndefined} from "util";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() news: NewsModel;
  public urlToGo: string;

  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
    if (!isUndefined(this.news)) {
      this.urlToGo = "/news/" + this.news._id;
      console.log(this.urlToGo);
    } else {

      this.activatedRoute.params.subscribe((params: Params) => {
        let newsId = params['id'];
        console.log("id : " + newsId);
        this.newsService.getOneNews(newsId).subscribe(
          news => this.news = news
        );

      });
    }
  }

  isDataLoaded() : boolean {
    return !isUndefined(this.news);
  }

}
