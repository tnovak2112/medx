import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login.routing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./views/login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginModule {}
