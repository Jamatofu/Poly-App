import { Component, OnInit } from '@angular/core';
import {PolypotinService} from "../../../../shared/service/polypotin/polypotin.service";
import {PolypotinModel} from "../../../../shared/model/PolypotinModel";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Component({
  selector: 'app-polypotin-list',
  templateUrl: './polypotin-list.component.html',
  styleUrls: ['./polypotin-list.component.css']
})
export class PolypotinListComponent implements OnInit {
  public polypotinList: PolypotinModel[] = [];
  public $polypotinList: Observable<PolypotinModel[]>;

  constructor(private polypotinService: PolypotinService) {
    this.$polypotinList = new ReplaySubject(1);
  }

  ngOnInit() {
    this.$polypotinList = this.polypotinService.getListPolypotin(true);
    this.$polypotinList.subscribe(potin => this.polypotinList = potin);
  }

}
