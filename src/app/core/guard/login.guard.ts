import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "../service/auth/auth.service";
import { Roles } from "src/app/core/enums/roles.enum";

@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  Roles: any;

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.currentUserValue) {
      const userRole = this.authService.currentUserValue.role_id;

      if (userRole === Roles.Admin) {
        console.log("Dashboard de Administrador en construcción.");
        return false;
      } else if (userRole === Roles.Cliente) {
        this.router.navigate(["/profile"]);
        return false;
      } else {
        return true;
      }
    }

    return true;
  }
}
