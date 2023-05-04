import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/service/auth/auth.service";
import { ConstantService } from "src/app/core/service/constants/constants.service";
import { ProfileService } from "src/app/core/service/profile/profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  //loginForm: FormGroup = loginForm();
  public profileExist: boolean = false;
  public userId: any;

  constructor(
    private readonly authService: AuthService,
    private readonly profileService: ProfileService,
    private readonly constantService: ConstantService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    if (this.constantService.userId === undefined) {
      this.router.navigate(["/home"]);
    } else {
      this.userId = this.constantService.userId;
      this.profileService
        .getProfile(this.constantService.userId)
        .subscribe((response: any) => {
          if (response.row_length > 0) {
            this.profileExist = true;
          }
        });
    }
  }
}
