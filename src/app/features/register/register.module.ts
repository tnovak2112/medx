import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterRoutingModule } from "./register.routing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RegisterComponent } from "./views/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from "@angular/material/stepper";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
  ],
})
export class RegisterModule {}
