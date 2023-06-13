import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  faRightFromBracket,
  faRightToBracket,
  faUser,
  faHouseChimney
} from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "src/app/core/service/auth/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  regIcon = faUserPlus;
  logIcon = faRightToBracket;
  profileIcon = faUser;
  logoutIcon = faRightFromBracket;
  homeIcon = faHouseChimney

  public state: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser.subscribe((response) => {
      if (response !== null) {
        this.state = true;
      }
    });
  }

  logout() {
    this.authService.logout().subscribe((res) => {
      if (!res.success) {
        this.state = false;
        this.router.navigate(["/login"]);
      }
    });
  }
}
