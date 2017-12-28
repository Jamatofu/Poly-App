import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  public logOut() {
    if(localStorage.getItem('currentUser') != null) {
      localStorage.removeItem('currentUser');
      console.log('Deconnexion');

    }
  }

  public isAdmin(): boolean {
    if(localStorage.getItem('currentUser') != null) {
      return JSON.parse(localStorage.getItem('currentUser')).admin;
    }

    return false;
  }
}
