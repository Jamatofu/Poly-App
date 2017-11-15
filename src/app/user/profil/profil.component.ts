import { Component, OnInit } from '@angular/core';
import {ProfilModel} from "../../../shared/model/ProfilModel";
import {AuthentificationService} from "../../../shared/service/authentification/authentification.service";
import {ActivatedRoute, Params} from "@angular/router";
import {isUndefined} from "util";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  public profil: ProfilModel;
  public $profil: Observable<ProfilModel>;

  constructor(private profilService: AuthentificationService, private activatedRoute: ActivatedRoute) {
    this.$profil = new ReplaySubject(1);


    let pseudo = JSON.parse(localStorage.getItem('currentUser')).pseudo;

    this.activatedRoute.params.subscribe((params: Params) => {
      pseudo = params['pseudo'];
    });

    this.$profil = this.profilService.getProfil(pseudo);
    this.$profil.subscribe(res => { this.profil = res; });
  }

  ngOnInit() {
  }



  isDataLoaded() : boolean {
    return !isUndefined(this.profil);
  }

}
