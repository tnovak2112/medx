import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RestorePasswordRoutingModule } from "./restore-password.routing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RestorePasswordComponent } from "./views/restore-password.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RestorePasswordComponent],
  imports: [
    CommonModule,
    RestorePasswordRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class RestorePasswordModule {}
