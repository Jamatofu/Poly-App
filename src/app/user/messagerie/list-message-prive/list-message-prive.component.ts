import { Component, OnInit } from '@angular/core';
import {MessagerieService} from "../../../../shared/service/messagerie/messagerie.service";
import {MessageModel} from "../../../../shared/model/MessageModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-message-prive',
  templateUrl: './list-message-prive.component.html',
  styleUrls: ['./list-message-prive.component.css']
})
export class ListMessagePriveComponent implements OnInit {
  public messageList: MessageModel[] = [];

  constructor(private messagerieService: MessagerieService, private router: Router) { }

  ngOnInit() {
    this.messagerieService.getMessage("1").subscribe(x => this.messageList = x);
  }

  ouvrirMessage(message: MessageModel) {
    this.messagerieService.readMessage(message);
    this.router.navigateByUrl('/message/' + message._id);
  }
}
