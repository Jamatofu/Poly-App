import { Component, OnInit } from '@angular/core';
import {PolypotinService} from "../../../shared/service/polypotin/polypotin.service";
import {FormBuilder} from "@angular/forms";
import {NotificationsService} from "angular2-notifications/dist";
import {PolypotinModel} from "../../../shared/model/PolypotinModel";

@Component({
  selector: 'app-add-polypotin',
  templateUrl: './add-polypotin.component.html',
  styleUrls: ['./add-polypotin.component.css']
})
export class AddPolypotinComponent implements OnInit {
  public addDefiForm = this.fb.group({
    content: [""],
  });

  public options = {
    position: ["left", "bottom"],
    timeOut: 4000,
    lastOnBottom: true
  };

  constructor(private fb: FormBuilder, private defiService: PolypotinService, private notificationService: NotificationsService ) { }

  ngOnInit() {
  }

  public addPolypotin() {
    console.log("Ajouter polypotin");
    let polypotin = new PolypotinModel(this.addDefiForm.value.content);
    this.defiService.addPolypotin(polypotin);

    this.notificationService.success('Polypotin proposé!', 'Attends la validation du staff');
  }
}
