import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthentificationService} from "../../shared/authentification/authentification.service";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  public authentificationForm = this.fb.group({
    pseudo: ["", Validators.required, Validators.minLength(5)],
    password: ["", Validators.required]
  });


  constructor(public fb: FormBuilder, private loginService: AuthentificationService) { }

  ngOnInit() {
  }

  doLogin(event) {
    console.log(this.authentificationForm.value);
    console.log('aaaa => ' + this.loginService.login('jama'));
    // console.log(this.loginService.login(this.authentificationForm.get('pseudo').value));
  }

}
