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


  protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];


  constructor(private fb: FormBuilder, private messagerieService: MessagerieService, private activatedRoute: ActivatedRoute, private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.futurReceiver = params['id'];
    });

    this.messagerieService.getListMember()
      .subscribe(data => this.possibleReceicer = data);
  }

  sendMessage() {
    let pseudo: string = JSON.parse(localStorage.getItem('currentUser')).pseudo;
    this.messagerieService.sendMessage(new MessageModel(this.addMpForm.value.title,
      this.addMpForm.value.content,
      Date.now().toLocaleString(),
      pseudo,
      this.addMpForm.value.receiver));
  }

  receiverIsNull() {
    return !isUndefined(this.futurReceiver);
  }

}
