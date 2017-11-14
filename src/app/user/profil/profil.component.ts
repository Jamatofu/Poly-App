import { Component, OnInit } from '@angular/core';
import {ProfilModel} from "../../../shared/model/ProfilModel";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  public profil: ProfilModel;

  constructor() { }

  ngOnInit() {
  }

}