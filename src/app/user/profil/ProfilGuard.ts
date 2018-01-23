import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot} from "@angular/router";
import {AuthentificationService} from "../../../shared/service/authentification/authentification.service";
import {ProfilModel} from "../../../shared/model/ProfilModel";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProfilGuard implements Resolve<ProfilModel> {

  constructor(private service: AuthentificationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProfilModel | Observable<ProfilModel> | Promise<ProfilModel> {
    return this.service.getProfil('test');
  }
}
