import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home.routing";
import { HomeComponent } from "./views/home.component";
import { HeroComponent } from "./components/hero/hero.component";
import { CategoriesComponent } from "./components/hero/categories/categories.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeComponent, HeroComponent, CategoriesComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule, FormsModule],
})
export class HomeModule {}
