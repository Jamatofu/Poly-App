import { Component, OnInit } from '@angular/core';
import {PolypotinService} from "../../../shared/service/polypotin/polypotin.service";
import {PolypotinModel} from "../../../shared/model/PolypotinModel";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Component({
  selector: 'app-accept-polypotin',
  templateUrl: './accept-polypotin.component.html',
  styleUrls: ['./accept-polypotin.component.css']
})
export class AcceptPolypotinComponent implements OnInit {
  public polypotinList: PolypotinModel[] = [];
  public $polypotinList: Observable<PolypotinModel[]>;

  constructor(private polypotinService: PolypotinService) {
    this.$polypotinList = new ReplaySubject(1);
  }

  ngOnInit() {
    this.$polypotinList = this.polypotinService.getListPolypotin(false);
    this.$polypotinList.subscribe(potin => this.polypotinList = potin);
  }

  public updatePolypotin(id: string, accepted: boolean) {
    if(accepted) {
      this.polypotinService.acceptPolypotin(id);
    } else {
      this.polypotinService.refusePolypotin(id);
    }


  }

}
