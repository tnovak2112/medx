import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileRoutingModule } from "./profile.routing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./views/profile.component";
import { SharedModule } from "src/app/shared/components/shared.module";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class ProfileModule {}
