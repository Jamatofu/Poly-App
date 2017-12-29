import { Component, OnInit } from '@angular/core';
import {DefiService} from "../../../shared/service/defi/defi.service";
import {FormBuilder} from "@angular/forms";
import {DefiModel} from "../../../shared/model/DefiModel";
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-add-defi',
  templateUrl: './add-defi.component.html',
  styleUrls: ['./add-defi.component.css']
})
export class AddDefiComponent implements OnInit {
  public addDefiForm = this.fb.group({
    name: [""],
    nbPoint: [""],
    description: [""],
    categorie: [""]
  });

  public options = {
    position: ["left", "bottom"],
    timeOut: 4000,
    lastOnBottom: true
  };

  constructor(private fb: FormBuilder, private defiService: DefiService, private notificationService: NotificationsService ) { }

  ngOnInit() {
  }

  public addDefi(categorie: string) {
    console.log("Ajouter un défi");
    let defi = new DefiModel(this.addDefiForm.value.name, this.addDefiForm.value.description, this.addDefiForm.value.nbPoint, categorie);
    this.defiService.addDefi(defi);

    this.notificationService.success('Le défi a bien été ajouté',
      '');
  }

}
