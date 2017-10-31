import { Component, OnInit } from '@angular/core';
import {DefiModel} from "../../../../shared/model/DefiModel";
import {DefiService} from "../../../../shared/service/defi/defi.service";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Component({
  selector: 'app-list-defi',
  templateUrl: './list-defi.component.html',
  styleUrls: ['./list-defi.component.css']
})
export class ListDefiComponent implements OnInit {
  public listDefi: DefiModel[] = [];
  public $defiList: Observable<DefiModel[]>;

  constructor(private defiService: DefiService) {
    this.$defiList = new ReplaySubject(1);
  }

  ngOnInit() {
    this.$defiList = this.defiService.getListDefi();
    this.$defiList.subscribe(listDefi => this.listDefi = listDefi);
  }

}
