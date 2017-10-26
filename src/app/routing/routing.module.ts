import { NgModule } from '@angular/core';
import {PageNotFoundComponent} from "../user/page-not-found/page-not-found.component";
import {CalendrierComponent} from "../user/calendrier/calendrier.component";
import {AuthentificationComponent} from "../authentification/authentification.component";
import {NewsListComponent} from "../user/news-list/news-list.component";
import {RouterModule, Routes} from "@angular/router";
import {AddNewsComponent} from "../admin/add-news/add-news.component";
import {MessagerieComponent} from "../user/messagerie/messagerie-global/messagerie.component";
import {NewsComponent} from "../user/news/news.component";
import {AddEvenementComponent} from "../admin/add-evenement/add-evenement.component";
import {LireMessageComponent} from "../user/messagerie/lire-message/lire-message.component";
import {EcrireMessageComponent} from "../user/messagerie/ecrire-message/ecrire-message.component";

const appRoutes: Routes = [
  { path: 'accueil', component: NewsListComponent },
  { path: 'login', component: AuthentificationComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'messagerie/:id', component: EcrireMessageComponent },
  { path: 'ajouter_news', component: AddNewsComponent },
  { path: 'ajouter_evenement', component: AddEvenementComponent },
  { path: 'news/:id', component: NewsComponent},
  { path: 'message/:id', component: LireMessageComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full'},
  { path: 'calendrier', component: CalendrierComponent, data: {title: 'Calendrier'} },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [ RouterModule],
  declarations: []
})
export class RoutingModule { }
