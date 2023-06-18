import { Component, OnInit } from "@angular/core";
import { ContactService } from "src/app/core/service/contact/contact.service";
import { contactForm } from "../forms/contact-form.form";
import { FormGroup } from "@angular/forms";
import { SnackBarService } from "src/app/core/service/snack-bar/snack-bar.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = contactForm();
  constructor(
    private readonly contactService: ContactService,
    private readonly snackBarService: SnackBarService
  ) {}

  ngOnInit() {}

  onSubmitContact() {
    this.contactForm.markAllAsTouched();

    if (!this.contactForm.invalid) {
      const message = {
        nombre: this.contactForm.controls["name"].value,
        apellido: this.contactForm.controls["lastname"].value,
        telefono: this.contactForm.controls["phone"].value,
        correo: this.contactForm.controls["email"].value,
        mensaje: this.contactForm.controls["message"].value,
      };
      this.contactService.sendMail(message).subscribe(
        (response) => {
          if (response.status === 200) {
            this.snackBarService.snackBarSuccess(
              "Correo enviado correctamente."
            );
            this.contactForm.reset();
          } else {
            this.snackBarService.snackBarError("Error al envuiar el correo");
          }
        },
        (err) => {
          this.snackBarService.snackBarError(err.error.message);
        }
      );
    } else {
      this.snackBarService.snackBarWarning(
        "Todos los campos son obligatorios."
      );
    }
  }
}
