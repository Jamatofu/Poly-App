import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponent } from './user/news/news.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule, MatMenuModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NewsListComponent } from './user/news-list/news-list.component';
import {NewsService} from "../shared/service/news/news.service";
import {HttpModule} from "@angular/http";
import { AuthentificationComponent } from './authentification/authentification.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuthentificationService} from "../shared/service/authentification/authentification.service";
import {HttpClientModule} from "@angular/common/http";
import {NgPipesModule} from "ngx-pipes";
import { CalendrierComponent } from './user/calendrier/calendrier.component';
import { CalendarModule } from 'angular-calendar';
import { PageNotFoundComponent } from './user/page-not-found/page-not-found.component';
import {RoutingModule} from "./routing/routing.module";
import { AddNewsComponent } from './admin/add-news/add-news.component';
// import {ImageToDataUrlModule} from "ngx-image2dataurl";
import { MessagerieComponent } from './user/messagerie/messagerie-global/messagerie.component';
import { LireMessageComponent } from './user/messagerie/lire-message/lire-message.component';
import { EcrireMessageComponent } from './user/messagerie/ecrire-message/ecrire-message.component';
import { AddEvenementComponent } from './admin/add-evenement/add-evenement.component';
import {BsDatepickerModule, PaginationModule} from "ngx-bootstrap";
import {EvenementService} from "../shared/service/evenement/evenement.service";
import { ListMessagePriveComponent } from './user/messagerie/list-message-prive/list-message-prive.component';
import {MessagerieService} from "../shared/service/messagerie/messagerie.service";
import {NguiAutoComplete, NguiAutoCompleteModule} from "@ngui/auto-complete";
import {Ng2CompleterModule} from "ng2-completer";
import { ListDefiComponent } from './user/defi/list-defi/list-defi.component';
import { DefiBlockComponent } from './user/defi/defi-block/defi-block.component';
import {DefiService} from "../shared/service/defi/defi.service";
import { AddDefiComponent } from './admin/add-defi/add-defi.component';
import {AuthGuard} from "./authentification/AuthGard";
import { ProfilComponent } from './user/profil/profil.component';
import { AddMemberComponent } from './admin/add-member/add-member.component';
import {AdminGuard} from "./admin/AdminGuard";
import {SimpleNotificationsModule} from "angular2-notifications";
import { PolypotinListComponent } from './polypotin/polypotin/polypotin-list/polypotin-list.component';
import { PolypotinComponent } from './polypotin/polypotin/polypotin/polypotin.component';
import {PolypotinService} from "../shared/service/polypotin/polypotin.service";
import { AddPolypotinComponent } from './polypotin/add-polypotin/add-polypotin.component';
import { PolypotinGlobalComponent } from './polypotin/polypotin-global/polypotin-global.component';
import { AcceptPolypotinComponent } from './admin/accept-polypotin/accept-polypotin.component';
import {ProfilGuard} from "./user/profil/ProfilGuard";


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NavbarComponent,
    NewsListComponent,
    AuthentificationComponent,
    CalendrierComponent,
    PageNotFoundComponent,
    AddNewsComponent,
    MessagerieComponent,
    LireMessageComponent,
    EcrireMessageComponent,
    AddEvenementComponent,
    ListMessagePriveComponent,
    ListDefiComponent,
    DefiBlockComponent,
    AddDefiComponent,
    ProfilComponent,
    AddMemberComponent,
    PolypotinListComponent,
    PolypotinComponent,
    AddPolypotinComponent,
    PolypotinGlobalComponent,
    AcceptPolypotinComponent,
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
    FormsModule,
    // ImageToDataUrlModule,
    RoutingModule,
    Ng2CompleterModule,
    [MatSidenavModule, MatMenuModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
    BsDatepickerModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    CalendarModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [NewsService, AuthentificationService, EvenementService, MessagerieService, DefiService, PolypotinService,AuthGuard, AdminGuard, ProfilGuard, {provide: LOCALE_ID, useValue: "fr-FR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
