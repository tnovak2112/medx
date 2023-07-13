import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { accountForm } from "../forms/register-form.form";
import { AuthService } from "src/app/core/service/auth/auth.service";
import { SnackBarService } from "src/app/core/service/snack-bar/snack-bar.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  accountForm: FormGroup = accountForm();

  isLinear = false;
  sendCode = false;
  attempts = 0;

  constructor(
    private router: Router,
    private readonly authService: AuthService,
    private readonly snackBarService: SnackBarService
  ) {}

  ngOnInit() {}

  onSubmitRegister() {
    this.accountForm.markAllAsTouched();

    if (!this.accountForm.invalid) {
      const user = {
        email: this.accountForm.controls["email"].value,
        password: this.accountForm.controls["password"].value,
      };
      this.authService.registrarUsuario(user).subscribe(
        (response) => {
          if (response.status === 200) {
            this.snackBarService.snackBarSuccess(
              "Se ha registrado correctamente."
            );
            this.router.navigate(["/login"]);
          } else {
            this.snackBarService.snackBarError("Error al registrarse");
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

  onSubmitAccountForm() {
    this.accountForm.markAllAsTouched();
    if (!this.accountForm.invalid) {
      const account = {
        email: this.accountForm.controls["email"].value,
        codigo: this.accountForm.controls["code"].value,
      };
      this.authService.verificarCodigoUsuario(account).subscribe(
        (response) => {
          if (response.status === 200) {
            console.log(response);
          } else {
            this.snackBarService.snackBarError("Error al verificar el código");
          }
        },
        (err) => {
          this.snackBarService.snackBarError(err.error.message);
        }
      );
    } else {
      console.log(this.accountForm.controls["code"].invalid);

      if (this.accountForm.controls["code"].invalid) {
        this.snackBarService.snackBarWarning(
          "Para completar el formulario, necesitamos el código de confirmación."
        );
      } else {
        this.snackBarService.snackBarWarning(
          "Verifica que el formulario esté correcto."
        );
      }
    }
  }

  sendCodeSMS() {
    if (this.attempts !== 3) {
      this.accountForm.markAllAsTouched();

      if (
        !this.accountForm.controls["phoneNumber"].invalid &&
        !this.accountForm.controls["email"].invalid
      ) {
        const account = {
          email: this.accountForm.controls["email"].value,
          phone: this.accountForm.controls["phoneNumber"].value,
        };
        this.authService.generarCodigoUsuario(account).subscribe(
          (response) => {
            if (response.status === 200) {
              this.snackBarService.snackBarSuccess(
                "Código enviado correctamente."
              );
              this.attempts += 1;
            } else {
              this.snackBarService.snackBarError("Error al enviar el código");
            }
          },
          (err) => {
            if (
              err.error.message ===
              '[PostgreSQL]: error: duplicate key value violates unique constraint "email_unique"'
            ) {
              this.snackBarService.snackBarError(
                "El correo electrónico seleccionado ya está en uso. Por favor, utilice otro."
              );
            } else {
              this.snackBarService.snackBarError(err.error.message);
            }
          }
        );

        this.sendCode = true;
      } else {
        this.snackBarService.snackBarWarning(
          "El formato del número telefónico o email es incorrecto."
        );
      }
    } else {
      this.snackBarService.snackBarWarning(
        "Ha excedido el número de intentos máximos permitidos."
      );
      this.router.navigate(["/home"]);
    }
  }
}
