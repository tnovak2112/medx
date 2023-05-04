import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { DocProfileComponent } from "./doc-profile/doc-profile.component";
import { BoxesComponent } from "./doc-profile/boxes/boxes.component";

const sharedComponents = [
  NavbarComponent,
  FooterComponent,
  DocProfileComponent,
  BoxesComponent,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatSnackBarModule,
  ],
  declarations: [sharedComponents],
  exports: [sharedComponents],
})
export class SharedModule {}
