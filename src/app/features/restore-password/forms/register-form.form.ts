import { FormControl, FormGroup, Validators } from "@angular/forms";

export function registerForm(): FormGroup {
  return new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]),
    code: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    repeat_password: new FormControl("", Validators.required),
  });
}
