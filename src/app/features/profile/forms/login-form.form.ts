import { FormControl, FormGroup, Validators } from "@angular/forms";

export function loginForm(): FormGroup {
  return new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]),
    password: new FormControl("", Validators.required),
  });
}
