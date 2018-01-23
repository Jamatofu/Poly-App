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

  totalItems: number = 60;
  currentPage = 1;
  itemPerPage: number = 20;
  maxSize: number = 5;

  constructor(private polypotinService: PolypotinService) {
    this.$polypotinList = new ReplaySubject(1);
    this.polypotinService.getNbPolypotin().subscribe(res => this.totalItems = res);
  }

  ngOnInit() {
    this.$polypotinList = this.polypotinService.getListPolypotin(true, this.currentPage - 1);
    this.$polypotinList.subscribe(potin => this.polypotinList = potin);
  }

  pageChanged(event: any): void {
    console.log(event.page);
    this.polypotinService.getListPolypotin(true, event.page - 1).subscribe(newList => this.polypotinList = newList);
  }

}
