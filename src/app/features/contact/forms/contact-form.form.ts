import { FormControl, FormGroup, Validators } from "@angular/forms";

export function contactForm(): FormGroup {
  return new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]),
    name: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required),
  });
}
