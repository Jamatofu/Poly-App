import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from "../../../../shared/model/MessageModel";
import {MessagerieService} from "../../../../shared/service/messagerie/messagerie.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {isUndefined} from "util";

@Component({
  selector: 'app-lire-message',
  templateUrl: './lire-message.component.html',
  styleUrls: ['./lire-message.component.css']
})
export class LireMessageComponent implements OnInit {
  public message: MessageModel;

  constructor(private messagerieService: MessagerieService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.message = this.messagerieService.readingMessage;

    if(this.message == null) {

      this.activatedRoute.params.subscribe( (params: Params) => {
          let id = params['id'];
          if(!isUndefined(id)) {
            this.messagerieService.getOneMessage(id).subscribe(res => this.message = res);
          }
        }
      );
    }
  }

  repondre() {
    this.router.navigateByUrl("/messagerie/" + this.message.idSender);
  }

}
