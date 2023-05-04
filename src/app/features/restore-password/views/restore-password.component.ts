import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { mailConfirmationForm } from "../forms/confirm-form.form";
import { registerForm } from "../forms/register-form.form";
import { AuthService } from "src/app/core/service/auth/auth.service";
import { SnackBarService } from "src/app/core/service/snack-bar/snack-bar.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-restore-password",
  templateUrl: "./restore-password.component.html",
  styleUrls: ["./restore-password.component.css"],
})
export class RestorePasswordComponent implements OnInit {
  mailConfirmationForm: FormGroup = mailConfirmationForm();
  registerForm: FormGroup = registerForm();

  public state = 0;

  constructor(
    private router: Router,
    private readonly authService: AuthService,
    private readonly snackBarService: SnackBarService
  ) {}

  ngOnInit() {}

  onSubmitEmail() {
    this.mailConfirmationForm.markAllAsTouched();

    if (!this.mailConfirmationForm.invalid) {
      const user = {
        email: this.mailConfirmationForm.controls["email"].value,
      };
      this.authService.generarCodigoUsuario(user).subscribe(
        (response) => {
          if (response.status === 200) {
            this.registerForm.controls["email"].setValue(user.email);
            this.registerForm.controls["email"].disable();
            this.snackBarService.snackBarSuccess(
              "Se ha enviado el código correctamente."
            );
            this.state = 1;
          } else {
            this.snackBarService.snackBarError("Error al enviar el código");
          }
        },
        (err) => {
          if (
            err.error.message ===
            "[PostgreSQL]: error: llave duplicada viola restricción de unicidad «email_unique»"
          ) {
            this.snackBarService.snackBarError(
              "El email ya está en uso, por favor utilice otro."
            );
          } else {
            this.snackBarService.snackBarError(err.error.message);
          }
        }
      );
    }
  }

  onSubmitRestorePassword() {
    this.registerForm.markAllAsTouched();

    if (!this.registerForm.invalid) {
      const user = {
        email: this.registerForm.controls["email"].value,
        password: this.registerForm.controls["password"].value,
        code: this.registerForm.controls["code"].value,
      };
      this.authService.actualizarClaveUsuario(user).subscribe(
        (response) => {
          if (response.status === 200) {
            if (response.row_length !== 0) {
              this.snackBarService.snackBarSuccess(
                "Se ha cambiado la contraseña correctamente."
              );
              this.router.navigate(["/login"]);
            } else {
              this.snackBarService.snackBarSuccess(
                "Correo o Código incorrecto."
              );
            }
          } else {
            this.snackBarService.snackBarError(
              "Error al cambiar la contraseña"
            );
          }
        },
        (err) => {
          this.snackBarService.snackBarError(err.error.message);
        }
      );
    }
  }
}
