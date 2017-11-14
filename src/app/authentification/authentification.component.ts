import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthentificationService} from "../../shared/service/authentification/authentification.service";
import {CanActivate, Router} from "@angular/router";
import {MemberModel} from "../../shared/model/MemberModel";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {
  public authentificationForm = this.fb.group({
    pseudo: [""],
    password: [""]
    // pseudo: ["", Validators.required, Validators.minLength(5)],
    // password: ["", Validators.required]
  });
  loading: boolean = false;
  error: string = '';

  constructor(public fb: FormBuilder, private loginService: AuthentificationService, private router: Router) { }

  login() {
    let user = new MemberModel(this.authentificationForm.value.pseudo, this.authentificationForm.value.password, '');

    this.loading = true;
    this.loginService.login(user)
      .subscribe(result => {
        if(result == true) {
          console.log('Redirection vers la page d\'accueil');
          this.router.navigate(['/accueil']);
        } else {
          this.error = 'Mdp ou user faux';
          this.loading = false;
        }
      });
  }

}
