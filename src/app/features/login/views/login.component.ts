import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { loginForm } from "../forms/login-form.form";
import { AuthService } from "src/app/core/service/auth/auth.service";
import { SnackBarService } from "src/app/core/service/snack-bar/snack-bar.service";
import { Roles } from "src/app/core/enums/roles.enum";
import { Router } from "@angular/router";
import {
  faIdCard,
  faUnlockKeyhole,
  faPenToSquare,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  //mailConfirmationForm: FormGroup = mailConfirmationForm();
  loginForm: FormGroup = loginForm();
  idIcon = faIdCard;
  lockIcon = faUnlockKeyhole;
  editIcon = faPenToSquare;

  constructor(
    private router: Router,
    private readonly authService: AuthService,
    private readonly snackBarService: SnackBarService
  ) {}

  ngOnInit() {}

  onSubmitLogin() {
    this.loginForm.markAllAsTouched();

    if (!this.loginForm.invalid) {
      const user = {
        email: this.loginForm.controls["email"].value,
        password: this.loginForm.controls["password"].value,
      };
      this.authService.loginUsuario(user).subscribe(
        (response) => {
          if (response.row_length !== 0) {
            localStorage.setItem("currentUser", JSON.stringify(response.data));
            this.authService.currentUserSubject.next(response.data);

            localStorage.setItem("token", JSON.stringify(response.token));
            this.authService.currentTokenSubject.next(response.token);

            const role = this.authService.currentUserValue.role_id;
            if (Roles.Admin === role) {
              this.snackBarService.snackBarWarning(
                "Dashboard de Administrador en construcción."
              );
            } else {
              this.router.navigate(["/profile"]);
            }

            this.snackBarService.snackBarSuccess("Bienvenido a MEDX.");
          } else {
            this.snackBarService.snackBarError(response.message);
          }
        },
        (err) => {
          this.snackBarService.snackBarError(err.error.message);
        }
      );
    }
  }
}
