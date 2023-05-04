import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthService } from "../service/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private readonly router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.currentUserValue) {
      const userRole = this.authService.currentUserValue.role_id;

      if (userRole < 1 || userRole > 3) {
        this.router.navigate(["/profile"]);
        return false;
      }

      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }
}
