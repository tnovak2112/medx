import { FormControl, FormGroup, Validators } from "@angular/forms";

export function accountForm(): FormGroup {
  return new FormGroup({
    email: new FormControl("ignacio.fuentesvalenzuela19@gmail.com", [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]),
    code: new FormControl("", [Validators.required, codeValidator]),
    phoneNumber: new FormControl("+56993942998", [
      Validators.required,
      phoneNumberValidator,
    ]),
    password: new FormControl("123qwe123", Validators.required),
    repeat_password: new FormControl("123qwe123", Validators.required),
  });
}

function phoneNumberValidator(
  control: FormControl
): { [key: string]: any } | null {
  const phoneNumberPattern = /^(\+?56)?\s?(\d{9})$/;

  if (control.value && !phoneNumberPattern.test(control.value)) {
    return { phoneNumber: true };
  }

  return null;
}

function codeValidator(control: FormControl): { [key: string]: any } | null {
  const codeNumberPattern = /^\d{6}$/;

  if (control.value && !codeNumberPattern.test(control.value)) {
    return { codeNumber: true };
  }

  return null;
}
