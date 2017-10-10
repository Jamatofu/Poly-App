import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NewsListComponent } from './news-list/news-list.component';
import {NewsService} from "../shared/news/news.service";
import {HttpModule} from "@angular/http";
import { AuthentificationComponent } from './authentification/authentification.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuthentificationService} from "../shared/authentification/authentification.service";
import {HttpClientModule} from "@angular/common/http";
import {NgPipesModule} from "ngx-pipes";

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NavbarComponent,
    NewsListComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgPipesModule,
    [MatSidenavModule]
  ],
  providers: [NewsService, AuthentificationService, {provide: LOCALE_ID, useValue: "fr-FR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
