import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

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


  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

  doLogin(event) {
    console.log(event);
    console.log(this.authentificationForm.value);
  }

}
