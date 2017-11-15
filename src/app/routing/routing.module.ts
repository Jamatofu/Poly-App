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
import {ListDefiComponent} from "../user/defi/list-defi/list-defi.component";
import {AddDefiComponent} from "../admin/add-defi/add-defi.component";
import {AuthGuard} from "../authentification/AuthGard";
import {ProfilComponent} from "../user/profil/profil.component";
import {AddMemberComponent} from "../admin/add-member/add-member.component";

const appRoutes: Routes = [
  // { path: 'accueil', component: NewsListComponent},
  { path: 'accueil', component: NewsListComponent, canActivate: [AuthGuard] },
  { path: 'messagerie', component: MessagerieComponent, canActivate: [AuthGuard] },
  { path: 'messagerie/:id', component: EcrireMessageComponent, canActivate: [AuthGuard]  },
  { path: 'ajouter_news', component: AddNewsComponent, canActivate: [AuthGuard]  },
  { path: 'ajouter_evenement', component: AddEvenementComponent, canActivate: [AuthGuard]  },
  { path: 'ajouter_membre', component: AddMemberComponent, canActivate: [AuthGuard]  },
  { path: 'news/:id', component: NewsComponent, canActivate: [AuthGuard] },
  { path: 'message/:id', component: LireMessageComponent, canActivate: [AuthGuard] },
  { path: 'defi', component: ListDefiComponent, canActivate: [AuthGuard] },
  { path: 'profil', component: ProfilComponent, canActivate: [AuthGuard] },
  { path: 'profil/:pseudo', component: ProfilComponent, canActivate: [AuthGuard] },
  { path: 'ajouter_defi', component: AddDefiComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthentificationComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'calendrier', component: CalendrierComponent, data: {title: 'Calendrier'}, canActivate: [AuthGuard]  },
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
