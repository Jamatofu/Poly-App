import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MemberModel} from "../../../shared/model/MemberModel";
import {ProfilModel} from "../../../shared/model/ProfilModel";
import {AuthentificationService} from "../../../shared/service/authentification/authentification.service";
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  public sexe: boolean;
  public admin: boolean;
  public addMemberForm = this.fb.group({
    nom: [""],
    prenom: [""],
    mail: [""],
    sexe: [""],
    admin: [""]
    // pseudo: ["", Validators.required, Validators.minLength(5)],
    // password: ["", Validators.required]
  });

  public options = {
    position: ["left", "bottom"],
    timeOut: 4000,
    lastOnBottom: true
  };

  constructor(private fb: FormBuilder, private inscriptionService: AuthentificationService, private notificationService: NotificationsService ) { }

  public addMember() {
    let nom = this.addMemberForm.value.nom;
    let prenom = this.addMemberForm.value.prenom;



    let pseudo = nom + prenom;
    let password = this.generatePassword();
    let newProfil = new ProfilModel(pseudo, '', prenom, nom, '', this.sexe);
    let newMember = new MemberModel(pseudo, password, this.addMemberForm.value.mail, this.admin);



    this.inscriptionService.addMember(newMember);
    this.inscriptionService.addProfil(newProfil);
    this.addMemberForm.reset();
    this.notificationService.success('L\'ajout du membre a bien été ajouté',
    'Pseudo : ' + pseudo);
  }

  private generatePassword(): string {
    let password = '';
    let char = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i < Math.floor(Math.random() * 6) + 1; i++) {
      password += char.charAt(Math.floor(Math.random() * char.length));
    }

    return password;
  }
}
