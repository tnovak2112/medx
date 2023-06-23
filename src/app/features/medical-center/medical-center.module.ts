import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MedicalCenterRoutingModule } from "./medical-center.routing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MedicalCenterComponent } from "./views/medical-center.component";
import { SharedModule } from "src/app/shared/components/shared.module";

@NgModule({
  declarations: [MedicalCenterComponent],
  imports: [
    CommonModule,
    MedicalCenterRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class MedicalCenterModule {}
