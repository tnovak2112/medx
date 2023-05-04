import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutRoutingModule } from "./about.routing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AboutComponent } from "./views/about.component";

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, FontAwesomeModule],
})
export class AboutModule {}
