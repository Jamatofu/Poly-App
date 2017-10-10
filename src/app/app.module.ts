import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule, MatMenuModule} from '@angular/material';
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
import {RouterModule, Routes} from "@angular/router";
import { CalendrierComponent } from './calendrier/calendrier.component';
import { CalendarModule } from 'angular-calendar';

const appRoutes: Routes = [
  { path: 'accueil', component: NewsListComponent },
  // { path: 'produits', component: ProduitListComponent },
  // { path: 'panier', component: PersonnalPanierComponent },
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'calendrier', component: CalendrierComponent }
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NavbarComponent,
    NewsListComponent,
    AuthentificationComponent,
    CalendrierComponent
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
    [MatSidenavModule, MatMenuModule],
    RouterModule.forRoot(appRoutes),
    CalendarModule.forRoot()
  ],
  providers: [NewsService, AuthentificationService, {provide: LOCALE_ID, useValue: "fr-FR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
