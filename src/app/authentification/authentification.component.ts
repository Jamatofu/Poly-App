import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthentificationService} from "../../shared/service/authentification/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  public authentificationForm = this.fb.group({
    pseudo: [""],
    password: [""]
    // pseudo: ["", Validators.required, Validators.minLength(5)],
    // password: ["", Validators.required]
  });
  public isLog: boolean;

  constructor(public fb: FormBuilder, private loginService: AuthentificationService, private router: Router) { }

  ngOnInit() {
    this.isLog = localStorage.getItem('login') != null;

    if(this.isLog) {
      this.router.navigate(['/accueil']);
    }
  }

  doLogin(event) {
    console.log('Valeur du form => ' + this.authentificationForm.value);
    console.log('Retour du service  => ' + this.loginService.login('jama'));
    // console.log(this.loginService.login(this.authentificationForm.get('pseudo').value));

    if(this.loginService.login('jama')) {
      localStorage.setItem('login', new Date(Date.now() + 60*60*12).toDateString());
      console.log('Identification réussie');

    }
  }

}
