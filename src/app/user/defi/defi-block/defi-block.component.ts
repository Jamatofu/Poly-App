import {Component, Input, OnInit} from '@angular/core';
import {DefiModel} from "../../../../shared/model/DefiModel";
import {DefiService} from "../../../../shared/service/defi/defi.service";
import {DefiAccepteModel} from "../../../../shared/model/DefiAccepteModel";

@Component({
  selector: 'app-defi-block',
  templateUrl: './defi-block.component.html',
  styleUrls: ['./defi-block.component.css']
})
export class DefiBlockComponent implements OnInit {
  @Input() defiModel: DefiModel;

  constructor(private defiService: DefiService) { }

  ngOnInit() {
  }

  acceptDefi() {
    var defiAccepteModel : DefiAccepteModel;
    defiAccepteModel = new DefiAccepteModel(this.defiModel.name, this.defiModel.description, this.defiModel.nbPoint, this.defiModel.categorie, false);

    this.defiService.acceptDefi(defiAccepteModel);
  }
}
