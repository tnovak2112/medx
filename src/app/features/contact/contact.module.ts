import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactRoutingModule } from "./contact.routing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ContactComponent } from "./views/contact.component";

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, FontAwesomeModule],
})
export class ContactModule {}
