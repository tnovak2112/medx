import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConstantService {
  constructor() {}

  private selectedUserId: any;

  set userId(userId: any) {
    this.selectedUserId = userId;
  }

  get userId() {
    return this.selectedUserId;
  }
}
