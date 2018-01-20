import {Component, Input, OnInit} from '@angular/core';
import {PolypotinModel} from "../../../../shared/model/PolypotinModel";

@Component({
  selector: 'app-polypotin',
  templateUrl: './polypotin.component.html',
  styleUrls: ['./polypotin.component.css']
})
export class PolypotinComponent implements OnInit {
  @Input()  polypotinModel : PolypotinModel;

  constructor() { }

  ngOnInit() {
  }

}
