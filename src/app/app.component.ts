import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public logOut() {
    if(localStorage.getItem('login') != null) {
      localStorage.removeItem('login');
      console.log('Deconnexion');
    }
  }
}
