import { FormControl, FormGroup, Validators } from "@angular/forms";

export function mailConfirmationForm(): FormGroup {
  return new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]),
  });
}
