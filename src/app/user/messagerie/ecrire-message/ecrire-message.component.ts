import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MessagerieService} from "../../../../shared/service/messagerie/messagerie.service";
import {MessageModel} from "../../../../shared/model/MessageModel";
import {ActivatedRoute, Params} from "@angular/router";
import {isUndefined} from "util";

@Component({
  selector: 'app-ecrire-message',
  templateUrl: './ecrire-message.component.html',
  styleUrls: ['./ecrire-message.component.css']
})
export class EcrireMessageComponent implements OnInit {
  public addMpForm: FormGroup = this.fb.group({
    title: [""],
    content: [""],
    receiver: [""]
  });

  public futurReceiver: string;

  constructor(private fb: FormBuilder, private messagerieService: MessagerieService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.futurReceiver = params['id'];
    });
  }

  sendMessage() {
    this.messagerieService.sendMessage(new MessageModel(this.addMpForm.value.title,
      this.addMpForm.value.content,
      Date.now().toLocaleString(),
      "Pierre",
      this.addMpForm.value.receiver));
  }

  receiverIsNull() {
    return !isUndefined(this.futurReceiver);
  }

}
