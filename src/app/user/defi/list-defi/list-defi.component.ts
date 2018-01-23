import { Component, OnInit } from '@angular/core';
import {DefiModel} from "../../../../shared/model/DefiModel";
import {DefiService} from "../../../../shared/service/defi/defi.service";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Categorie} from "../../../../shared/enum/Categorie";
import {current} from "codelyzer/util/syntaxKind";

@Component({
  selector: 'app-list-defi',
  templateUrl: './list-defi.component.html',
  styleUrls: ['./list-defi.component.css']
})
export class ListDefiComponent implements OnInit {
  public listDefi: DefiModel[] = [];
  public $defiList: Observable<DefiModel[]>;
  public categorie : string;

  totalItems: number = 60;
  currentPage = 1;
  itemPerPage: number = 15;
  maxSize: number = 5;

  constructor(private defiService: DefiService) {
    this.$defiList = new ReplaySubject(1);
    this.sortDefiList('');
    this.defiService.getNbDefi(this.categorie).subscribe(res => this.totalItems = res);
  }

  ngOnInit() {
  }

  sortDefiList(categorie : string) {
    this.categorie = categorie;
    this.currentPage = 1;
    this.$defiList = this.defiService.getListDefi(categorie, this.currentPage - 1);
    this.$defiList.subscribe(listDefi => {this.listDefi = listDefi});
    this.defiService.getNbDefi(this.categorie).subscribe(res => this.totalItems = res);
  }

  pageChanged(event: any): void {
    console.log(event.page);
    this.defiService.getListDefi(this.categorie, event.page - 1).subscribe(listDefi => this.listDefi = listDefi);
  }

}
