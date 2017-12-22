import { Component, OnInit } from '@angular/core';
import {DefiService} from "../../../shared/service/defi/defi.service";
import {FormBuilder} from "@angular/forms";
import {DefiModel} from "../../../shared/model/DefiModel";

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

  constructor(private fb: FormBuilder, private defiService: DefiService) { }

  ngOnInit() {
  }

  public addDefi(categorie: string) {
    console.log("Ajouter un défi");
    let defi = new DefiModel(this.addDefiForm.value.name, this.addDefiForm.value.description, this.addDefiForm.value.nbPoint, categorie);
    this.defiService.addDefi(defi);
  }

}
