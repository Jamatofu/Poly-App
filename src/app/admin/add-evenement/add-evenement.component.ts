import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {EvenementService} from "../../../shared/service/evenement/evenement.service";
import {EvenementModel} from "../../../shared/model/EvenementModel";
import {NotificationsService} from "angular2-notifications";

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {
  public addEventForm = this.fb.group({
    title: [""],
    contenu: [""],
    dateDebut: [""]
  });

  public options = {
    position: ["left", "bottom"],
    timeOut: 4000,
    lastOnBottom: true
  };

  public minDate = new Date(2017, 0, 10);
  public _bsValue: Date;
  public hours: number[] = Array(24).fill(0).map((x,i)=>i);
  public minutes: number[] = Array(60).fill(0).map((x,i)=>i);

  constructor(private fb: FormBuilder, private evenementService: EvenementService, private notificationService: NotificationsService ) { }

  ngOnInit() {
  }

  addEvent() {
    let evenement = new EvenementModel(this.addEventForm.value.contenu,
                                       this.addEventForm.value.title,
                                       this.addEventForm.value.dateDebut);

    this.evenementService.addEvenement(evenement);
    this.addEventForm.reset();
    this.notificationService.success('L\'évènement a bien été ajouté');

  }

  set bsValue(v: Date) {
    console.log(v);
    this._bsValue = v;
  }
}
