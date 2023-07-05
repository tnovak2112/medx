import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { registerForm } from "../forms/register-form.form";
import { AuthService } from "src/app/core/service/auth/auth.service";
import { SnackBarService } from "src/app/core/service/snack-bar/snack-bar.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = registerForm();
  isLinear = false;

  constructor(
    private router: Router,
    private readonly authService: AuthService,
    private readonly snackBarService: SnackBarService
  ) {}

  ngOnInit() {}

  onSubmitRegister() {
    this.registerForm.markAllAsTouched();

    if (!this.registerForm.invalid) {
      const user = {
        email: this.registerForm.controls["email"].value,
        password: this.registerForm.controls["password"].value,
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
}
