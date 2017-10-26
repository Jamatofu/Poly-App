import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {NewsService} from "../../../shared/service/news/news.service";
import {NewsModel} from "../../user/news/NewsModel";
// import {ImageResult, Options} from "ngx-image2dataurl";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  public addNewsForm = this.fb.group({
    title: [""],
    urlImage: [""],
    contenu: [""]
    // pseudo: ["", Validators.required, Validators.minLength(5)],
    // password: ["", Validators.required]
  });

  // public src: string = null;
  // public options: Options = {
  //   resize: {
  //     maxHeight: 500,
  //     maxWidth: 500,
  //     quality: 7
  //   },
  //   allowedExtensions: ['JPG', 'PnG']
  // };
  //
  // selected(imageResult: ImageResult) {
  //   if (imageResult.error)
  //     alert(imageResult.error);
  //
  //   this.src = imageResult.resized
  //     && imageResult.resized.dataURL
  //     || imageResult.dataURL;
  // }

  constructor(private fb: FormBuilder, private newsService: NewsService) { }

  ngOnInit() {
  }

  public addNews() {
    let news = new NewsModel(this.addNewsForm.value.title, this.addNewsForm.value.urlImage, this.addNewsForm.value.contenu);
    this.newsService.addNews(news);
  }

}
