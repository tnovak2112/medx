import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackBarService {
  constructor(private readonly _snackBar: MatSnackBar) {}

  snackBarSuccess(message: string) {
    this._snackBar.open(message, "", {
      duration: 3000,
      verticalPosition: "bottom",
      horizontalPosition: "center",
      panelClass: "bg-green",
    });
  }

  snackBarError(message: string) {
    this._snackBar.open(message, "", {
      duration: 3000,
      verticalPosition: "bottom",
      horizontalPosition: "center",
      panelClass: "bg-red",
    });
  }

  snackBarWarning(message: string) {
    this._snackBar.open(message, "", {
      duration: 3000,
      verticalPosition: "bottom",
      horizontalPosition: "center",
      panelClass: "bg-yellow",
    });
  }
}
