import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {MessageModel} from "../../model/MessageModel";
import {Observable} from "rxjs/Observable";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class MessagerieService {
  private url: string = "http://localhost:3000/messagerie";

  public readingMessage: MessageModel;
  public idMessage: string;
  public nextReceiver: string;

  constructor(private http: Http) { }

  sendMessage(message: MessageModel) {
    this.http.post(this.url, message).subscribe();
    console.log("Message envoyé");
  }

  getMessage(idReceiver : string) {
    return this.http.get(this.url + "/" + idReceiver).map(res => res.json());
  }

  readMessage(message: MessageModel) {
    this.readingMessage = message;
  }

  getOneMessage(id: string) {
    console.log("Récupere le message " + id);
    return this.http.get(this.url + "/idMessage/" + id).map(res => res.json());
  }

  getListMember() {
    return this.http.get("http://localhost:3000/member").map(res => res.json());
  }
}
