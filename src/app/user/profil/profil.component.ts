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
  public isDataLoaded: boolean = false;

  constructor(private profilService: AuthentificationService, private activatedRoute: ActivatedRoute) {
    let pseudo = JSON.parse(localStorage.getItem('currentUser')).pseudo;
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['pseudo'] != null) {
        console.log("Pseudo log :" + params['pseudo']);
        pseudo = params['pseudo'];
      }
    });
    this.$profil = this.profilService.getProfil(pseudo);
    this.$profil.subscribe(res => this.profil = res,
      error => console.log("Erreur : " + error),
      () => { console.log("Chargement profil fini"); this.isDataLoaded = true; });
  }

  ngOnInit() {
  }
}
