import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AuthentificationService} from "../../shared/service/authentification/authentification.service";
import {ProfilModel} from "../../shared/model/ProfilModel";
import {isUndefined} from "util";

@Component({
  selector: 'app-profil-container',
  templateUrl: './profil-container.component.html',
  styleUrls: ['./profil-container.component.css']
})
export class ProfilContainerComponent implements OnInit {
  public profil: ProfilModel;
  public pseudo: string;

  constructor(private profilService: AuthentificationService, private activatedRoute: ActivatedRoute) {

    this.pseudo = JSON.parse(localStorage.getItem('currentUser')).pseudo;
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['pseudo'] != null) {
        console.log("Pseudo log :" + params['pseudo']);
        this.pseudo = params['pseudo'];
      }
    });

    // this.activatedRoute.paramMap.subscribe((params : ParamMap) => {
    //   this.profil = params.get();
    // });


    if (isUndefined(this.profil)) {
      this.profilService.getProfil(this.pseudo).subscribe(res => {
        console.log("Log profil");
        this.profil = res;
        console.log(this.profil);
      });
    }
  }

    ngOnInit() {
    }

  isDataLoaded() {
    return !isUndefined(this.profil);
  }
  }
