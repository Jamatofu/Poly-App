import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MessagerieService} from "../../../../shared/service/messagerie/messagerie.service";
import {MessageModel} from "../../../../shared/model/MessageModel";
import {ActivatedRoute, Params} from "@angular/router";
import {isUndefined} from "util";
import {CompleterData, CompleterService} from "ng2-completer";
import {MemberModel} from "../../../../shared/model/MemberModel";

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
  public possibleReceicer: MemberModel[] = [];

  constructor(private fb: FormBuilder, private messagerieService: MessagerieService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.futurReceiver = params['id'];
    });

    this.messagerieService.getListMember()
      .subscribe(data => this.possibleReceicer = data);
  }

  sendMessage() {
    let id: string = JSON.parse(localStorage.getItem('currentUser')).id;
    let pseudo: string = JSON.parse(localStorage.getItem('currentUser')).pseudo;
    this.messagerieService.sendMessage(new MessageModel(this.addMpForm.value.title,
      this.addMpForm.value.content,
      id,
      this.addMpForm.value.receiver,
      pseudo));
  }

  receiverIsNull() {
    return !isUndefined(this.futurReceiver);
  }

}
