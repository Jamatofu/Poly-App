import {Component, Input, OnInit} from '@angular/core';
import {DefiModel} from "../../../../shared/model/DefiModel";

@Component({
  selector: 'app-defi-block',
  templateUrl: './defi-block.component.html',
  styleUrls: ['./defi-block.component.css']
})
export class DefiBlockComponent implements OnInit {
  @Input() defiModel: DefiModel;

  constructor() { }

  ngOnInit() {
  }

}
