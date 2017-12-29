/**
 * Created by bealclement on 11/11/17.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('currentUser')) {
      var isAdmin = JSON.parse(localStorage.getItem('currentUser')).admin;
      if(isAdmin) {
        console.log("Est bien un admin");
        return true;
      }
    }

    // not logged in so redirect to login page
    this.router.navigate(['']);
    return false;
  }
}
