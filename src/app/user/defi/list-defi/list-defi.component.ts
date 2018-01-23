import { Component, OnInit } from '@angular/core';
import {DefiModel} from "../../../../shared/model/DefiModel";
import {DefiService} from "../../../../shared/service/defi/defi.service";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Categorie} from "../../../../shared/enum/Categorie";

@Component({
  selector: 'app-list-defi',
  templateUrl: './list-defi.component.html',
  styleUrls: ['./list-defi.component.css']
})
export class ListDefiComponent implements OnInit {
  public listDefi: DefiModel[] = [];
  public $defiList: Observable<DefiModel[]>;
  public categorie : string[];

  constructor(private defiService: DefiService) {
    this.$defiList = new ReplaySubject(1);
    this.categorie = Object.keys(Categorie).map(key => Categorie[key]).filter(value => typeof value === 'string') as string[];
  }

  ngOnInit() {
    this.sortDefiList('');
  }

  sortDefiList(categorie : string) {
    this.$defiList = this.defiService.getListDefi(categorie);
    this.$defiList.subscribe(listDefi => {this.listDefi = listDefi});
  }

}
