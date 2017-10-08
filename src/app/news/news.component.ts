import {Component, Input, OnInit} from '@angular/core';
import {NewsModel} from "./NewsModel";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() news: NewsModel;

  constructor() { }

  ngOnInit() {
  }

}
